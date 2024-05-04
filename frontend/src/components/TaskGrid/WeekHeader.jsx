import React from 'react';
import { Box } from '@mui/material';

function WeekHeader(props) {
    const weekHeaderStyles = {
        justifySelf: "stretch",
        // border: "1px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }


    return (<Box sx={weekHeaderStyles}>
        {props.exam ? "Exam" : `Week ${props.number}`}
    </Box>);
}

export default WeekHeader;
