import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
  // const { isAuthenticated, logIn } = useAuth()
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main rw-login">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <img src="img/logo.png" alt="Logo BTN Gia Dinh" />
          <div className="rw-segment">
            <h1>Quản Lý Ban Ngành </h1>
          </div>

          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Đăng nhập</h2>
            </header>
            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    // validation={{
                    //   required: {
                    //     value: true,
                    //     message: 'Username is required',
                    //   },
                    // }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Mật khẩu
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    // validation={{
                    //   required: {
                    //     value: true,
                    //     message: 'Password is required',
                    //   },
                    // }}
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Đăng nhập
                    </Submit>
                  </div>
                  <FieldError name="password" className="rw-field-error" />
                  {/* <div className="providersGroup">
                    <hr className="hr"></hr>
                    <div className="rw-button-group">
                      <Submit className="rw-button rw-button-red">
                        Đăng nhập bằng Google
                      </Submit>
                    </div>
                  </div> */}
                </Form>
              </div>
            </div>
          </div>
          {/* <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default LoginPage
