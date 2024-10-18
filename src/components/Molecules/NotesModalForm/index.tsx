import { useEffect, useRef } from 'react'
import AddNoteForm from '@/components/Molecules/AddNoteForm'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import type { TypeNoteItem } from '@/types'
import PropTypes from 'prop-types'

type TypeNotesModalForm = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: Pick<TypeNoteItem, 'title' | 'body'>) => void
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
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{ modal: 'w-full max-w-lg !bg-slate-500 !rounded-md' }}
    >
      <AddNoteForm onSubmit={onSubmit} />
    </Modal>
  )
}
NotesModalForm.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default NotesModalForm
