import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from '../store/profile/selectors'

export function ProfilePage() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()


    return (
        <>
            <h1>Профиль</h1>
            <p>{theme === 'light' ? '🌞' : '🌙'}</p>
            <button onClick={toggleTheme}>Изменить тему</button>
            <hr />
            <h2>{name}</h2>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(toggleProfile())} >видимость</button>
            <br />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => dispatch(changeName(value))}>Изменить имя</button>
        </>
    )
}