import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);