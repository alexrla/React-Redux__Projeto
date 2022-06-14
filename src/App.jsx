// npm install -g json-server
// json-server server.json -p 3333
// http://localhost:3333/trips

// npm install axios

// npm install react-icons --save

// npm install redux react-redux

// npm install immer

// npm install redux-saga

import React from 'react';

import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store/store';

export default function App(props) {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
