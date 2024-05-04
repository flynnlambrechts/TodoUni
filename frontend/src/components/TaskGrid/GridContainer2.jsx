import { Box } from '@mui/material';
import React from 'react';
import RowHeaders from './RowHeaders';


function GridContainer2 (props) {
    let gridTemplateColumns = "80px "
    for (const i in props.widths) {
        gridTemplateColumns += `${props.widths[i]}fr `
    }

    const containerStyles = {
        display: "grid",
        // border: 1,
        columnGap: 2,
        gridTemplateColumns,
        gridTemplateRows: "1fr auto",
        flexGrow: 1,
   
        // height: 700,
    }
    return (<Box sx={containerStyles}>
        <RowHeaders />
        {props.children}
    </Box>);	
}

export default GridContainer2;
