import './App.css';
import Message from './message';
function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                My First React App
                <h3>Hello, {props.name}</h3>
                <Message message={props.message} />
            </header>

        </div>
    );
}

export default App;