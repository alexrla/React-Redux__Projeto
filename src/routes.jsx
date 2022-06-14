import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Reserve from './pages/Reserve';

export default function RoutesApp(props)    {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reserve />} />
            </Routes>
        </BrowserRouter>
    );
}