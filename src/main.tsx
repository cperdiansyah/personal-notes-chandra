import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/components/Pages/Home'
import Archive from '@/components/Pages/Archive'
import NotFound from '@/components/Pages/NotFound'

import '@/styles/tailwind.css'
import NoteDetail from '@/components/Pages/Note/[id]'

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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
