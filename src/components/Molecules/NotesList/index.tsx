import NotesItem from '@/components/Molecules/NotesItem'
import type { TypeNotes } from '@/types'

type TypeNoteList = {
  notes: TypeNotes
  onDelete: (id: string | number) => void
  onArchive: (id: string | number) => void
}

const NoteList = ({ notes, onDelete, onArchive }: TypeNoteList) => {
  if (notes.length === 0) {
    return (
      <div className="text-center text-gray-500 w-full text-2xl">
        No notes found
      </div>
    )
  }
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
