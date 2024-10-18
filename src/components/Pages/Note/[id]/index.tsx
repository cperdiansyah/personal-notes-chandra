import Layout from '@/components/Pages/layout'
import useNotes from '@/hooks/useNotes'
import { showFormattedDate } from '@/utils'

import { useParams } from 'react-router-dom'

const NoteDetail = () => {
  const { id } = useParams()
  const { getNoteById } = useNotes()
  const note = getNoteById(id || '')
  console.log(note)
  return (
    <Layout>
      <div className="note-detail-wrapper">
        <div className="note-detail-header">
          <h1 className="text-2xl font-bold">{note?.title}</h1>
          <p className="text-sm text-gray-500">
            {showFormattedDate(note?.createdAt || new Date())}
          </p>
        </div>
        <div className="note-detail-body mt-4">
          <p className="text-lg text-gray-500">{note?.body}</p>
        </div>
      </div>
    </Layout>
  )
}

export default NoteDetail
