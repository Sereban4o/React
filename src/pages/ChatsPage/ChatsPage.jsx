import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'
import { ChatList } from '../../components/ChatList/ChatList'

import { WithClasses } from '../../HOC/WithClasses'

import styles from './ChatsPage.module.css'


export function ChatsPage({ messagesDB, chats }) {
    const { chatId } = useParams()

    const MessageListWithClass = WithClasses(MessageList)

    console.log('messagesDB', messagesDB)
    const messagesChat = chats.find((chat) => chat?.name === chatId)
    const messages = Object.entries(messagesChat.messages).map((mes) => ({
        id: mes[0],
        text: mes[1].text,
        author: mes[1].author,
    }))
    console.log('messages', messagesChat)

    return (
        <>
            <h1>Чаты</h1>
            <ChatList chats={chats} />
            <MessageListWithClass
                messages={chatId ? messages : []}
                classes={styles.border}
            />
            <Form />
        </>
    )
}
