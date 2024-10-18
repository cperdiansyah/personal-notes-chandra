import { getTheme } from '@/utils/helpers'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  useEffect(() => {
    getTheme()
  }, [])
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg mt-4">Oopsie Woopsie! Site not found!</p>
        <Link to="/" className="underline underline-offset-4">
          Get back to the force
        </Link>
        <div className="w-full max-w-2xl mt-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=xFjAR8fWYJVNHlcT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
