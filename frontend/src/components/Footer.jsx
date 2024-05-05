import React from 'react';
import ProgressBar from './ProgressBar';
import { Container } from '@mui/material';

function Footer() {

    return (<Container sx={{flexGrow: 1}}>
        <ProgressBar />
    </Container>);
}

export default Footer;
