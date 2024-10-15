import AppBar from '@/components/Molecules/AppBar'
import NotesItem from '@/components/Molecules/NotesItem'
import Searchbar from '@/components/Molecules/Searchbar'
import useNotes from '@/hooks/useNotes'
import { getTheme } from '@/utils/helpers'
import { useEffect } from 'react'

const Home = () => {
  const { notes, searchNotes, deleteNote, archiveNote } = useNotes()

  useEffect(() => {
    getTheme()
  }, [])

  const handleSearchNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchNotes(e.target.value)
  }

  const handleDeleteNote = (id: string | number) => {
    deleteNote(id)
  }

  const handleArchiveNote = (id: string | number) => {
    archiveNote(id)
  }
  
  return (
    <>
      <AppBar />
      <Searchbar onChange={handleSearchNotes} />
      <div className="notes-app__body container  py-5">
        <div className="notes-list grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <NotesItem
              key={note.id}
              {...note}
              onArchive={handleArchiveNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
