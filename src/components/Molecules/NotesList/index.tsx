import NotesItem from '@/components/Molecules/NotesItem'
import type { TypeNotes } from '@/types'

type TypeNoteList = {
  notes: TypeNotes
  onDelete: (id: string | number) => void
  onArchive: (id: string | number) => void
}

const NoteList = ({ notes, onDelete, onArchive }: TypeNoteList) => {
  return notes.map((note) => (
    <NotesItem
      key={note.id}
      {...note}
      onArchive={onArchive}
      onDelete={onDelete}
    />
  ))
}

export default NoteList
