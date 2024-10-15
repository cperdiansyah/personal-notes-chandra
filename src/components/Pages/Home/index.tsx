import AppBar from '@/components/Molecules/AppBar'
import NotesItem from '@/components/Molecules/NotesItem'
import { getInitialData } from '@/utils'
import { getTheme } from '@/utils/helpers'
import { useEffect, useState } from 'react'

const Home = () => {
  const [notes, setNotes] = useState(getInitialData())

  useEffect(() => {
    getTheme()
  }, [])
  return (
    <>
      <AppBar />
      <div className="notes-app__body container  py-5">
        <div className="notes-list grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <NotesItem key={note.id} {...note} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
