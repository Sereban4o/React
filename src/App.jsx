import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Message from './message';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';


function App(props) {
    const [messages, setMessages] = useState([]);
    const addMessage = (newMessage) => {

        setMessages([...messages, newMessage])
    }
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: 'Я бот'
                })
            }, 1500)
            return () => { clearTimeout(timeout) }
        }

    }, [messages])


    return (
        <div className="App">
            <header className="App-header">
                Мое первое приложение на React
                <h3>Привет, {props.name}</h3>
                <Message message={props.message} />
                <Form addMessage={addMessage} />
                <MessageList messages={messages} />
            </header>

        </div>
    );
}

export default App;