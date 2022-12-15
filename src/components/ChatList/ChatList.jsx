import { useState } from "react"
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import {
    ThemeProvider,
    useTheme,
} from "@mui/material";


import createMuiTheme from '@mui/material/styles/createTheme';

export function ChatList({ onAddChat, chats }) {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#fc0fc0",
            },
            secondary: {
                main: "#0098FF",
            },
        },
    });

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}>
                            <Link to={`/chats/${chat.name}`}>
                                {chat.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <h1>ChatList</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <button type="submit">Create Chat</button>
                </form>
            </></ThemeProvider>
    )
}