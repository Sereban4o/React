import { Outlet, Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

import styles from './Header.module.css'

export const navigate = [
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
]

export function Header() {

    const name = useSelector((store) => store.name)

    return (
        <>
            <header>
                <nav className={styles.header}>
                    <ul>
                        {navigate.map((link) => (
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
                    <p>{name}</p>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}