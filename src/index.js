import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import {SnackbarProvider} from "notistack";
import Slide from "@mui/material/Slide";
import ScreenSizeProvider from "./services/ScreenSizeProvider";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ScreenSizeProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        autoHideDuration={3000}
                        TransitionComponent={Slide}
                    >
                        <React.StrictMode>
                            <App/>
                        </React.StrictMode>
                    </SnackbarProvider>
                </ScreenSizeProvider>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);