import React from 'react';
import { Container } from '@mui/material';

function Main(props) {
    const style = {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    }
    return (<main style={style}>
        <Container maxWidth="unset" sx={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
            {props.children}
        </Container>
    </main >);
}

export default Main;
