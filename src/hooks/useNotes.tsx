import type { TypeNoteItem, TypeNotes } from '@/types'
import { getInitialData, getItem, setItem } from '@/utils'
import React, { useEffect, useState } from 'react'

const useNotes = () => {
  const [notes, setNotes] = useState<TypeNotes>([])

  useEffect(() => {
    const notesLocalStorage = getItem('notes') as TypeNotes

    if (notesLocalStorage !== null && notesLocalStorage?.length > 0) {
      setNotes(notesLocalStorage as TypeNotes)
    } else {
      setItem('notes', getInitialData())
      setNotes(getInitialData())
    }
  }, [])

  const searchNotes = (keyword: string) => {
    let filteredNotes = getItem('notes') as TypeNotes

    if (keyword !== '') {
      filteredNotes = filteredNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()),
      )
    }

    setNotes(filteredNotes)
  }

  const addNote = (note: TypeNoteItem) => {
    const updatedNotes = [...notes, note]
    setNotes(updatedNotes)
    setItem('notes', updatedNotes)
  }

  const deleteNote = (id: string | number) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
    setItem('notes', newNotes)
  }
  const archiveNote = (id: string | number) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }
      }
      return note
    })
    setNotes(newNotes)
    setItem('notes', newNotes)
  }

  return { notes, setNotes, searchNotes, addNote, deleteNote, archiveNote }
}

export default useNotes
