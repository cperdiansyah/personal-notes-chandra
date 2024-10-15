import type { TypeNoteItem } from '@/types'
import { getInitialData } from '@/utils'
import React, { useState } from 'react'

const useNotes = () => {
  const [notes, setNotes] = useState(getInitialData())

  const searchNotes = (keyword: string) => {
    let filteredNotes = getInitialData()
    if (keyword !== '') {
      filteredNotes = filteredNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()),
      )
    }

    setNotes(filteredNotes)
  }

  const addNote = (note: TypeNoteItem) => {
    setNotes([...notes, note])
  }

  const deleteNote = (id: string | number) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  const archiveNote = (id: string | number) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }
      }
      return note
    })
    setNotes(newNotes)
  }

  return { notes, setNotes, searchNotes, addNote, deleteNote, archiveNote }
}

export default useNotes
