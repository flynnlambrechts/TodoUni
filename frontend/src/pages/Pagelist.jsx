import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';


import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import GridView from './GridView';
import ListView from './ListView';
import { base_url } from '../config';

import ThemeModeController from '../wrappers/Theme';

function PageList() {
    return (
        <ThemeModeController>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

                <Navbar />
                <Main>
                    <Routes >
                        <Route path="/" element={ <Navigate to={base_url} /> } />
                        <Route path={base_url} element={<Dashboard />} />
                        <Route path={base_url + 'grid'} element={<GridView />} />
                        <Route path={base_url + '/list'} element={<ListView />} />
                    </Routes>
                </Main>
                <Footer />
            </Box>
        </ThemeModeController >
    );
}

export default PageList;