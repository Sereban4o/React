

import '../App.css';
import {
    ThemeProvider,
    useTheme,
} from "@mui/material";
import createMuiTheme from '@mui/material/styles/createTheme';

export function ProfilePage() {


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


    return (
        <ThemeProvider theme={theme}>

            <div className="App">
                <header className="App-header">
                    Профиль
                </header>

            </div></ThemeProvider>
    );
}