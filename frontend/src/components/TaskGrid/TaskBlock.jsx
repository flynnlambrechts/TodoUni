import React from 'react';
import { Box } from '@mui/material';
import { updateState } from '../../helpers';

function TaskBlock(props) {
    // props: {subjectName, taskName, week, status?}
    const colours = ["unset", "orange",  "red", "green", "grey"]

    const [state, setState] = React.useState(props.status);

    const taskBlockStyles = {
        justifySelf: "stretch",
        border: "0.4px solid grey",
        backgroundColor: colours[state],
    }

    const cycleStatus = () => {
        const newState = (state + 1) % colours.length;
        props.subjectName && updateState(props.subjectName, props.taskName, props.week, newState)
        setState(newState);
    }

    return (<Box 
        sx={taskBlockStyles}
        onMouseDown={cycleStatus}
    >
    </Box>);
}

export default TaskBlock;
