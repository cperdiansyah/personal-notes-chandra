import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Archive from '@/components/Pages/Archive'
import Home from '@/components/Pages/Home'
import NotFound from '@/components/Pages/NotFound'

import Login from '@/components/Pages/Auth/Login'
import Register from '@/components/Pages/Auth/Register'
import NoteDetail from '@/components/Pages/Note/[id]'
import { ThemeProvider } from '@/context/theme-context'
import '@/styles/tailwind.css'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
  {
    path: '/note/:id',
    element: <NoteDetail />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
