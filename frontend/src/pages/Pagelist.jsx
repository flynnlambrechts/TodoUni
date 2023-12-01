import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import GridView from './GridView';
import ListView from './ListView';

import ThemeModeController from '../wrappers/Theme';

function PageList() {
    return (
        <ThemeModeController>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

                <Navbar />
                <Main>
                    <Routes >
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/grid' element={<GridView />} />
                        <Route path='/list' element={<ListView />} />
                    </Routes>
                </Main>
                <Footer />
            </Box>
        </ThemeModeController >
    );
}

export default PageList;