import './message.css';
function Message(props) {
    return (
        <div className="Message">
            Сообщение: {props.message}
        </div>
    );
}
export default Message;