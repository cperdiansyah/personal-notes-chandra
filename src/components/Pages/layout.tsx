import type React from 'react'
import { useEffect, useState } from 'react'
import AppBar from '../Molecules/AppBar'
import Searchbar from '../Molecules/Searchbar'
import FloatingButton from '../Atoms/FloatingButton'
import NotesModalForm from '../Molecules/NotesModalForm'
import type { TypeNoteItem } from '@/types'
import { getTheme } from '@/utils/helpers'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

type TypeLayout = {
  children: React.ReactNode
  onSubmit?: (values: Pick<TypeNoteItem, 'title' | 'body'>) => void
}

const Layout = ({ children, onSubmit }: TypeLayout) => {
  const { id } = useParams()
  useEffect(() => {
    getTheme()
  }, [])

  const [isModalShow, setIsModalShow] = useState(false)

  function handleModalShow() {
    setIsModalShow(!isModalShow)
  }

  function handleSubmit(values: Pick<TypeNoteItem, 'title' | 'body'>) {
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    onSubmit && onSubmit(values)
    setTimeout(() => {
      handleModalShow()
    }, 400)
  }

  return (
    <>
      <AppBar />
      {!id && <Searchbar />}
      <div className="notes-app__body container  py-5">{children}</div>
      {!id && (
        <>
          <FloatingButton onClick={handleModalShow} />
          <NotesModalForm
            isOpen={isModalShow}
            onClose={handleModalShow}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
}

export default Layout
