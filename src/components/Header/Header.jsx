import { Outlet, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logOut } from '../../services/firebase'

import styles from './Header.module.css'

export const navigates = [
  {
    id: 1,
    name: 'Главная',
    to: '/'
  },
  {
    id: 2,
    name: 'Профиль',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Чаты',
    to: '/chats'
  },
  {
    id: 4,
    name: 'О нас',
    to: '/about'
  },
  {
    id: 5,
    name: 'Статьи',
    to: '/articles'
  },
]

export function Header() {

  const navigate = useNavigate()

  const name = useSelector((store) => store.profile.name)
  const isAuth = useSelector((store) => store.profile.isAuth)

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogout = async () => {
    await logOut()
  }

  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigates.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {!isAuth && (
            <>
              <button onClick={handleLogin}>Вход</button>
              <button onClick={handleSignUp}>Регистрация</button>
            </>
          )}
          {isAuth && (
            <>
              <button onClick={handleLogout}>Выход</button>
            </>
          )}
          <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}