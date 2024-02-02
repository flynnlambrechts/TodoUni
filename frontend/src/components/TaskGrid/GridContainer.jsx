import React from 'react';
import { Box } from '@mui/material';


function GridContainer(props) {

    const gridContainerStyles = {
        display: "grid",
        gridTemplateColumns: `80px repeat(${props.cols}, 1fr)`,
        gridTemplateRows: `repeat(${props.rows + 1}, 1fr)`,
        gap: 0.5,
        flexGrow: 1
    }


    return (<Box sx={gridContainerStyles} id="grid-view">
        {props.children}
    </Box >);
}

export default GridContainer;
