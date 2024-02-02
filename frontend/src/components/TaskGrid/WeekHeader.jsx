import React from 'react';
import { Box } from '@mui/material';

function WeekHeader(props) {
    const weekHeaderStyles = {
        justifySelf: "stretch",
        // border: "1px solid white",
        gridColumn: "1 / span 1",
        gridRow: `${props.number + 2} / span 1`,
        textAlign: "right"
    }


    return (<Box sx={weekHeaderStyles}>
        Week {props.number}
    </Box>);
}

export default WeekHeader;
