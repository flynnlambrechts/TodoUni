import React from 'react';
import { Box } from '@mui/material';


function GridContainer(props) {

    const gridContainerStyles = {
        display: "grid",
        gridTemplateColumns: `80px repeat(${props.cols}, 1fr)`,
        gridTemplateRows: `repeat(${props.rows + 1}, 1fr)`,
        gap: 1,
    }


    return (<Box sx={gridContainerStyles}>
        {props.children}
    </Box >);
}

export default GridContainer;
