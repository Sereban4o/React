import { useState } from "react"
import { Button } from "../ui/Button"

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text
        });
        setText('');
    }

    return (
        <>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <Button type="submit">Отправить сообщение</Button>
            </form>
        </>
    )
}