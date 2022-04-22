import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { Button } from '@mantine/core'

const HomeLayout = ({ children }) => {
  const { isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <>
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            {/* <ul>
              <li>
                <Link to={routes.home()} className="rw-link">
                  Home
                </Link>
              </li>
            </ul> */}
          </h1>
          {isAuthenticated ? (
            <div className="right-login">
              {/* <span>Logged in as </span>{' '} */}
              <div className="text-sm">{currentUser.email}</div>
              <Button color="gray" className="text-sm" onClick={logOut} compact>
                Đăng xuất
              </Button>
              {/* <Link to={routes.newContact()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Contact
        </Link> */}
            </div>
          ) : (
            <Link to={routes.login()} className=" rw-button rw-button-green">
              Login
            </Link>
          )}
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default HomeLayout
