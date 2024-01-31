import React from 'react';
import { Box } from '@mui/material';

function SubjectHeader(props) {
    // props: {numTasks}
    const taskBlockStyles = {
        justifySelf: "stretch",
        textAlign: "center",
        gridColumn: "span " + props.numTasks,
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
