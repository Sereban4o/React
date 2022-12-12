import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import './MessageList.css'
export function MessageList({ messages }) {
    const chatList = [
        'Чат №1',
        'Чат №2',
        'Чат №3'];
    return (
        <>
            <h1>Чат</h1>
            <div className="ChatList">
                <List sx={{ width: '100%', maxWidth: 360, }}>
                    {chatList.map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    <CommentIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={`${value}`} />
                        </ListItem>
                    ))}
                </List>

                <ul>
                    {messages.map((item, index) => (
                        <li key={index}>{item.author} - {item.text}  </li>
                    ))}
                </ul>
            </div>
        </>
    )
}