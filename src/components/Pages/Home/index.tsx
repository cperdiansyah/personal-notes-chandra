import NoteList from '@/components/Molecules/NotesList'
import Layout from '@/components/Pages/layout'
import useNotes from '@/hooks/useNotes'
import type { TypeNoteItem } from '@/types'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()
  const { notes, deleteNote, archiveNote, addNote, searchNotes } = useNotes()

  useEffect(() => {
    handleSearchNotes(searchParams.get('search') || '')
  }, [searchParams.get('search')])

  const handleSearchNotes = (search: string) => {
    searchNotes(search || '')
  }

  const handleAddNote = (values: { title: string; content: string }) => {
    const newNote: TypeNoteItem = {
      id: Date.now(),
      title: values.title,
      body: values.content,
      archived: false,
      createdAt: new Date().toISOString(),
    }
    addNote(newNote)
  }

  return (
    <Layout
      onSubmit={(values) =>
        handleAddNote({ title: values.title, content: values.body })
      }
    >
      <div className="notes-app_note-list-wrapper">
        <h2 className="text-2xl font-bold w-full text-center mb-4">
          Active Notes
        </h2>
        <NoteList
          notes={notes.filter((note) => !note.archived)}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      </div>
    </Layout>
  )
}

export default Home
