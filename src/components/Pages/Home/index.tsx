import FloatingButton from '@/components/Atoms/FloatingButton'
import AppBar from '@/components/Molecules/AppBar'
import NoteList from '@/components/Molecules/NotesList'
import NotesModalForm from '@/components/Molecules/NotesModalForm'
import Searchbar from '@/components/Molecules/Searchbar'
import useNotes from '@/hooks/useNotes'
import type { TypeNoteItem } from '@/types'
import { getTheme } from '@/utils/helpers'
import { useEffect, useState } from 'react'

const Home = () => {
  const { notes, searchNotes, deleteNote, archiveNote, addNote } = useNotes()

  const [modalShow, setModalShow] = useState(false)

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

  const handleAddNote = (values: { title: string; content: string }) => {
    // console.log('add note')
    console.log(values)
    const newNote: TypeNoteItem = {
      id: Date.now(),
      title: values.title,
      body: values.content,
      archived: false,
      createdAt: new Date().toISOString(),
    }
    addNote(newNote)
    setTimeout(() => {
      handleModalShow()
    }, 400)
  }

  const handleModalShow = () => {
    setModalShow(!modalShow)
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
      <FloatingButton onClick={handleModalShow} />
      <NotesModalForm
        isOpen={modalShow}
        onClose={handleModalShow}
        onSubmit={handleAddNote}
      />
    </>
  )
}

export default Home
