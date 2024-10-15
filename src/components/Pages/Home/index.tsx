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
      {notes.map((note) => (
        <NotesItem key={note.id} {...note} />
      ))}
    </>
  )
}

export default Home
