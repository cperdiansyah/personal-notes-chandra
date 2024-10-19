export interface LoginCredentials {
  email: string
  password: string
}
export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

export interface UserResponse {
  error: boolean
  data: unknown
}
export interface Note {
  title: string
  body: string
}
