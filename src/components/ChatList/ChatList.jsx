import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'

import { set } from "firebase/database";
import { messagesRef } from '../../services/firebase'

export function ChatList({ messageDB, chats }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()


  console.log('update chats', chats)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))

    set(messagesRef, {
      ...messageDB,
      [value]: {
        name: value
      }
    })
  }

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
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