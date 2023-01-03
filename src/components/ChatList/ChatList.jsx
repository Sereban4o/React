import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addChat } from '../../store/messages/actions'


import { push, set, remove } from "firebase/database";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase'

export function ChatList({ messagesDB, chats }) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    console.log('update chats', chats)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))

        set(messagesRef, {
            ...messagesDB,
            [value]: {
                name: value
            }
        })

        push(getMessageListById(value), {
            text: 'Чат был создан',
            author: 'Admin',
        });

        setValue('');
    }

    const handleDeleteChat = (chatId) => {
        remove(getChatById(chatId));
    };

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.name}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={() => dispatch(handleDeleteChat(chat.name))}>X</button>
                    </li>
                ))}
            </ul>

            <h1>Чаты</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Создать чат</button>
            </form>
        </>
    )
}