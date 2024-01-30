import React from 'react';
import { Box } from '@mui/material';

function SubjectHeader(props) {
    const taskBlockStyles = {
        justifySelf: "stretch",
        textAlign: "center",
        gridColumn: "span 4",
        // border: "1px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return (<Box sx={taskBlockStyles}>
        {props.name}
    </Box>);
}

export default SubjectHeader;
