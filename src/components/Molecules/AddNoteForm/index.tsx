import Button from '@/components/Atoms/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'

type TypeAddNoteForm = {
  onSubmit: (values: { title: string; body: string }) => void
}

const AddNoteForm = ({ onSubmit }: TypeAddNoteForm) => {
  return (
    <Formik
      initialValues={{ title: '', body: '' }}
      validate={(values) => {
        const errors: { title?: string; body?: string } = {}
        if (!values.title) {
          errors.title = 'Required'
        }
        if (!values.body) {
          errors.body = 'Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values)
        setTimeout(() => {
          setSubmitting(false)
          resetForm()
        }, 400)
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="w-3/4 mx-auto">
          <div className="flex mb-5 flex-col">
            <label htmlFor="title">Title</label>
            <p className="text-sm text-right text-gray-300 mb-3">
              Sisa Karakter : {50 - values.title.length}
            </p>
            <Field
              type="text"
              name="title"
              className="w-full rounded-sm px-4 py-2 border border-gray-300 text-gray-700"
              placeholder="Masukkan judul"
              maxLength={50}
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div className="flex mb-5 flex-col">
            <label htmlFor="content">Content</label>
            <Field
              as="textarea"
              name="body"
              className=" w-full rounded-sm px-4 py-2 border border-gray-300 text-gray-700"
              placeholder="Masukkan isi catatan"
            />
            <ErrorMessage name="content" component="div" />
          </div>

          <Button
            className="w-full disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddNoteForm
