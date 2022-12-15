import { Link, Outlet, NavLink } from "react-router-dom"
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

    }
]
export function Header() {
    return (
        <><header><nav>
            <ul>
                {navigate.map((el) => (
                    <li key={el.id}>
                        <NavLink to={el.to}
                            style={({ isActive }) => ({
                                color: isActive ? 'green' : 'blue'
                            })}>
                            {el.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
            <main>
                <Outlet />
            </main></>
    )
}