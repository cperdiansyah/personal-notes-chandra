import { Formik, Form, Field, type FieldProps } from 'formik'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import LayoutAuth from '@/components/Pages/layoutAuth'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-1/3">
          <span className="text-2xl font-bold">Login</span>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full py-5">
                <Field name="email">
                  {({ field }: FieldProps) => (
                    <Input {...field} placeholder="Email" className="mb-3" />
                  )}
                </Field>
                <Field name="password">
                  {({ field }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="Password"
                      type="password"
                      className="mb-3"
                    />
                  )}
                </Field>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full md:w-1/3 block mx-auto"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <span className="text-sm text-gray-300">
            Belum punya akun?{' '}
            <Link to="/auth/register" className="text-blue-500 font-bold">
              Register
            </Link>
          </span>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default Login
