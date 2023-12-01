import React from 'react';
import { Container } from '@mui/material';

function Main(props) {
    const style = {
        display: "block",
        flexGrow: 1,
    }
    return (<main style={style}>
        <Container maxWidth="unset">
            {props.children}
        </Container>
    </main >);
}

export default Main;
