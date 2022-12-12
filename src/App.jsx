import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Message from './message';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';
import {
    ThemeProvider,
    useTheme,
} from "@mui/material";
import createMuiTheme from '@mui/material/styles/createTheme'

function App(props) {
    const [messages, setMessages] = useState([]);
    const addMessage = (newMessage) => {

        setMessages([...messages, newMessage])
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#FF9800",
            },
            secondary: {
                main: "#0098FF",
            },
        },
    });
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
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    Мое первое приложение на React
                    <h3>Привет, {props.name}</h3>
                    <Message message={props.message} />
                    <Form addMessage={addMessage} />
                    <MessageList messages={messages} />


                </header>

            </div></ThemeProvider>
    );
}

export default App;