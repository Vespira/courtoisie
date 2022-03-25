import React from 'react';
import {Route, Routes, BrowserRouter, Outlet} from 'react-router-dom';

import './App.scss';
import Navbar from './components/organisms/navbar/navbar.component';
import Home from './components/pages/home/home.component';
import List from './components/pages/list/list.component';
import NotFound from './components/pages/not-found/not-found.component';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route exact path='/list' element={<List />} />
                    <Route element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
