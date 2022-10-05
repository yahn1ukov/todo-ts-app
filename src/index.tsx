import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
