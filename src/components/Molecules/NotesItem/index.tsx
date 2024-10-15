import type { TypeNoteItem } from '@/types'
import { showFormattedDate } from '@/utils'
import React from 'react'

import './index.scss'
import Button from '@/components/Atoms/Button'
const NotesItem = (props: TypeNoteItem) => {
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
        <Button variant="danger">Delete</Button>
        <Button variant="secondary">Archieve</Button>
      </div>
    </div>
  )
}

export default NotesItem
