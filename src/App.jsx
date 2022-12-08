import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Message from './message';

function App(props) {
    const [messageList, setMessageList] = useState(
        [{
            text: '',
            autor: ''
        }]
    );

    const messageListMap = messageList.map((element, index) => {
        return <li key={index}>{element.text} {element.autor}</li>;
    });

    useEffect(() => {
        const messageCopy = Object.assign([], messageList);
        const messageObj = {
            text: "Я бот",
            autor: "Бот"
        };
        messageCopy.push(messageObj);

        setMessageList(messageCopy);
    }, [messageList.autor]);

    function messageChange(e) {
        e.preventDefault();
        if (e.target[0].value != "") {
            const messageCopy = Object.assign([], messageList);
            const messageObj = {
                text: e.target[0].value,
                autor: props.name
            };
            messageCopy.push(messageObj);

            setMessageList(messageCopy);
            e.target[0].value = "";
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                Мое первое приложение на React
                <h3>Привет, {props.name}</h3>
                <Message message={props.message} />
                <form onSubmit={messageChange}>
                    <input />
                    <button>Отправить</button>
                </form>
                {messageListMap}
            </header>

        </div>
    );
}

export default App;