import AppBar from '@/components/Molecules/AppBar'
import NotesItem from '@/components/Molecules/NotesItem'
import NoteList from '@/components/Molecules/NotesList'
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

  const toggleArchiveNote = (id: string | number) => {
    archiveNote(id)
  }

  return (
    <>
      <AppBar />
      <Searchbar onChange={handleSearchNotes} />
      <div className="notes-app__body container  py-5">
        <div className="notes-app_note-list-wrapper">
          <h2 className="text-2xl font-bold">Not Archive</h2>

          <div className="notes-list grid grid-cols-3 gap-4">
            <NoteList
              notes={notes.filter((note) => note.archived === false)}
              onDelete={handleDeleteNote}
              onArchive={toggleArchiveNote}
            />
          </div>
        </div>
        <div className="notes-app_note-list-wrapper pt-5">
          <h2 className="text-2xl font-bold">Archive</h2>
          <div className="notes-list grid grid-cols-3 gap-4">
            <NoteList
              notes={notes.filter((note) => note.archived === true)}
              onDelete={handleDeleteNote}
              onArchive={toggleArchiveNote}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
