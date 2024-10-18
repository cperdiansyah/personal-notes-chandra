const BASE_URL = 'https://notes-api.dicoding.dev/v1'

function getAccessToken(): string | null {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken: string): void {
  localStorage.setItem('accessToken', accessToken)
  return
}

async function fetchWithToken(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
}

interface LoginCredentials {
  email: string
  password: string
}

async function login({
  email,
  password,
}: LoginCredentials): Promise<{ error: boolean; data: unknown }> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    alert(responseJson.message)
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

interface RegisterCredentials {
  name: string
  email: string
  password: string
}

async function register({
  name,
  email,
  password,
}: RegisterCredentials): Promise<{ error: boolean }> {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    alert(responseJson.message)
    return { error: true }
  }

  return { error: false }
}

interface UserResponse {
  error: boolean
  data: unknown
}

async function getUserLogged(): Promise<UserResponse> {
  const response = await fetchWithToken(`${BASE_URL}/users/me`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

interface Note {
  title: string
  body: string
}

async function addNote({
  title,
  body,
}: Note): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function getActiveNotes(): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function getArchivedNotes(): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function getNote(id: string): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function archiveNote(
  id: string,
): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function unarchiveNote(
  id: string,
): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function deleteNote(
  id: string,
): Promise<{ error: boolean; data: unknown }> {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
}
