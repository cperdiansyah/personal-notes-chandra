import AddNoteForm from '@/components/Molecules/AddNoteForm'
import { useEffect, useRef } from 'react'

type TypeNotesModalForm = {
  isOpen: boolean
  onClose?: () => void
  onSubmit: (values: { title: string; content: string }) => void
}
const NotesModalForm = ({ isOpen, onClose, onSubmit }: TypeNotesModalForm) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose?.()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      ref={modalRef}
      className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-slate-500  flex justify-center items-center max-w-lg m-auto max-h-fit py-10 px-5 rounded-md`}
    >
      <AddNoteForm onSubmit={onSubmit} />
    </div>
  )
}

export default NotesModalForm
