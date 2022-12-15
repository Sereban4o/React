import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import '../App.css';
import { MessageList } from '../components/MessageList/MessageList';
import { Form } from '../components/Form/Form';
import {
    ThemeProvider,
    useTheme,
} from "@mui/material";
import createMuiTheme from '@mui/material/styles/createTheme';
import { AUTHOR } from "../constants"
import { ChatList } from '../components/ChatList/ChatList';
export function ChatsPage({ onAddChat, onAddMessage, messages, chats }) {


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
    const { chatId } = useParams()

    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'Im BOT'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (massage) => {
        if (chatId) {
            onAddMessage(chatId, massage)
        }
    }

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <ThemeProvider theme={theme}>

            <div className="App">
                <header className="App-header">
                    <ChatList chats={chats} onAddChat={onAddChat} />
                    <Form addMessage={handleAddMessage} />
                    <MessageList messages={chatId ? messages[chatId] : []} />
                </header>
            </div></ThemeProvider>
    );
}

