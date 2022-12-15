import { Routes, Route } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { useState } from 'react'

const defaultMessges = {
    default: [
        {
            author: 'user',
            text: 'one text'
        },
        {
            author: 'user',
            text: 'two text'
        },
    ]
}

export function App() {
    const [messages, setMessages] = useState(defaultMessges)

    const chats = Object.keys(messages).map((chat) => ({
        id: nanoid(),
        name: chat
    }))

    const onAddChat = (newChat) => {
        console.log('newChat', newChat)
        setMessages({
            ...messages,
            [newChat.name]: []
        })
    }

    const onAddMessage = (chatId, newMassage) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMassage]
        })
    }

    return (
        <>

            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="chats">
                        <Route index element={<ChatList chats={chats} onAddChat={onAddChat} />} />
                        <Route
                            path=":chatId"
                            element={<ChatsPage chats={chats}
                                messages={messages}
                                onAddMessage={onAddMessage}
                                onAddChat={onAddChat} />}
                        />
                    </Route>
                </Route>

                <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
        </>
    )
}