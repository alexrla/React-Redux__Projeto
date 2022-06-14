// npm install -g json-server
// json-server server.json -p 3333
// http://localhost:3333/trips

// npm install axios

// npm install react-icons --save

// npm install redux react-redux

// npm install immer

// npm install redux-saga

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';

import Home from './pages/Home';
import Reserve from './pages/Reserve';

import store from './store/store';

export default function App(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reservas" element={<Reserve />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
