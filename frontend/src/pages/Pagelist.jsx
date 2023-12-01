import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import GridView from './GridView';
import ListView from './ListView';
import { Button } from '@mui/material';

import ThemeModeController from '../wrappers/Theme';

function PageList() {
    return (<>
        <ThemeModeController>

            <Navbar />
            <Main>
                <Routes >
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/grid' element={<GridView />} />
                    <Route path='/list' element={<ListView />} />
                </Routes>
            </Main>
            <Footer />
        </ThemeModeController>
    </>);
}

export default PageList;