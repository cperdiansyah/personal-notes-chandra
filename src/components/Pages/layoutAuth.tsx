import { getTheme } from '@/utils/helpers'
import type React from 'react'
import { useEffect } from 'react'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    getTheme()
  }, [])
  return <div className="notes-app__body container  py-5">{children}</div>
}

export default LayoutAuth
