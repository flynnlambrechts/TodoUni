import React from 'react';
import { Box } from '@mui/material';

function TaskHeader(props) {
    const taskBlockStyles = {
        justifySelf: "stretch",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return (<Box {...props} sx={taskBlockStyles}>
        {props.name}
    </Box>);
}

export default TaskHeader;
