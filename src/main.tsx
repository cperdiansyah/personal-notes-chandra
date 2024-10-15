import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from '@/components/Pages/Home'

import '@/styles/tailwind.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
