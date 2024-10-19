import LayoutAuth from '@/components/Pages/layoutAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, Form, Formik, type FieldProps } from 'formik'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-1/3">
          <span className="text-2xl font-bold">Register</span>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission
              console.log(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full py-5">
                <Field name="name" rules={{ required: 'Name is required' }}>
                  {({ field }: FieldProps) => (
                    <Input {...field} placeholder="Name" className="mb-3" />
                  )}
                </Field>
                <Field name="email" rules={{ required: 'Email is required' }}>
                  {({ field }: FieldProps) => (
                    <Input {...field} placeholder="Email" className="mb-3" />
                  )}
                </Field>
                <Field
                  name="password"
                  rules={{ required: 'Password is required' }}
                >
                  {({ field }: FieldProps) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="mb-3"
                    />
                  )}
                </Field>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-1/3 block mx-auto"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <span className="text-sm text-gray-300">
            Sudah punya akun?{' '}
            <Link to="/auth/login" className="text-blue-500 font-bold">
              Login
            </Link>
          </span>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default Register
