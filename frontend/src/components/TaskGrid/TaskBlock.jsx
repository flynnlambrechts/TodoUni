import React from 'react';
import { Box } from '@mui/material';

function TaskBlock(props) {
    const colours = ["unset", "orange",  "red", "green", "grey"]

    const [state, setState] = React.useState(props.status);

    const taskBlockStyles = {
        justifySelf: "stretch",
        border: "0.4px solid grey",
        backgroundColor: colours[state],
    }

    const cycleStatus = () => {
        setState((state + 1) % colours.length)
    }

    return (<Box 
        sx={taskBlockStyles}
        onMouseDown={cycleStatus}
    >
    </Box>);
}

export default TaskBlock;
