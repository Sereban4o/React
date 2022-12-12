export function MessageList({ messages }) {
    return (
        <>
            <h1>Чат</h1>
            <ul>
                {messages.map((item, index) => (
                    <li key={index}>{item.author} - {item.text}  </li>
                ))}
            </ul>
        </>
    )
}