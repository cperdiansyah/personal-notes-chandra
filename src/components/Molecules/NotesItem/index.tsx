import type { TypeNoteItem } from '@/types'
import { showFormattedDate } from '@/utils'

import './index.scss'
import Button from '@/components/Atoms/Button'
type TypeNotesItem = {
  onDelete: (id: string | number) => void
  onArchive: (id: string | number) => void
} & TypeNoteItem
const NotesItem = (props: TypeNotesItem) => {
  return (
    <div className="note-item__wrapper">
      <div className="note-item__header">
        <div className="note-item__hader__title">{props.title}</div>
        <div className="note-item__hader__created text-sm text-gray-500 ">
          {showFormattedDate(props.createdAt)}
        </div>
      </div>
      <div className="note-item__body">
        <div className="note-item__body__content">{props.body}</div>
      </div>
      <div className="note-item__footer flex justify-around pt-3">
        <Button variant="danger" onClick={() => props.onDelete(props.id)}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => props.onArchive(props.id)}>
          Archieve
        </Button>
      </div>
    </div>
  )
}

export default NotesItem
