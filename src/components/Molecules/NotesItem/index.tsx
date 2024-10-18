import type { TypeNoteItem } from '@/types'
import { showFormattedDate } from '@/utils'
import PropTypes from 'prop-types'

import './index.scss'
import Button from '@/components/Atoms/Button'
import { Link } from 'react-router-dom'

export type TypeNotesItem = {
  onDelete: (id: string | number) => void
  onArchive: (id: string | number) => void
} & TypeNoteItem

const NotesItem = (props: TypeNotesItem) => {
  return (
    <div className="note-item__wrapper">
      <div className="note-item__header">
        <Link to={`/note/${props.id}`}>
          <div className="note-item__hader__title">{props.title}</div>
        </Link>
        <div className="note-item__hader__created text-sm text-gray-500 ">
          {showFormattedDate(props.createdAt)}
        </div>
      </div>
      <div className="note-item__body">
        <div className="note-item__body__content line-clamp-3">
          {props.body}
        </div>
      </div>
      <div className="note-item__footer flex justify-around pt-3">
        <Button variant="danger" onClick={() => props.onDelete(props.id)}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => props.onArchive(props.id)}>
          {props.archived ? 'Unarchive' : 'Archive'}
        </Button>
      </div>
    </div>
  )
}

NotesItem.propTypes = {
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
}

export default NotesItem
