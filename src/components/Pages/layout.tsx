import type React from 'react'
import { useEffect, useState } from 'react'
import AppBar from '../Molecules/AppBar'
import Searchbar from '../Molecules/Searchbar'
import FloatingButton from '../Atoms/FloatingButton'
import NotesModalForm from '../Molecules/NotesModalForm'
import type { TypeNoteItem } from '@/types'
import { getTheme } from '@/utils/helpers'

type TypeLayout = {
  children: React.ReactNode
  onSubmit: (values: Pick<TypeNoteItem, 'title' | 'body'>) => void
}

const Layout = ({ children, onSubmit }: TypeLayout) => {
  useEffect(() => {
    getTheme()
  }, [])

  const [isModalShow, setIsModalShow] = useState(false)

  function handleModalShow() {
    setIsModalShow(!isModalShow)
  }

  function handleSubmit(values: Pick<TypeNoteItem, 'title' | 'body'>) {
    onSubmit(values)
    setTimeout(() => {
      handleModalShow()
    }, 400)
  }

  return (
    <>
      <AppBar />
      <Searchbar />
      <div className="notes-app__body container  py-5">{children}</div>
      <FloatingButton onClick={handleModalShow} />
      <NotesModalForm
        isOpen={isModalShow}
        onClose={handleModalShow}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Layout
