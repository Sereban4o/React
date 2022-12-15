
import { BrowserRouter, Route, Link, } from "react-router-dom";

export default function Routes() {
    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">chats</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </header>


        </BrowserRouter>
    );
}
