import { useRef, useState } from "react"
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button'
import { useEffect } from "react";
import { AUTHOR } from "../../constants";

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text
        });
        setText('');
        inputRef.current?.focus();

    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    return (
        <>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    inputRef={inputRef}
                    value={text} onChange={(e) => setText(e.target.value)}
                    id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained" type="submit">Отправить</Button>
            </form>
        </>
    )
}