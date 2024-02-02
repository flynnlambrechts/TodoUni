import React from 'react';
import { Box } from '@mui/material';
import { getTaskStatus, updateState } from '../../helpers';
import { taskColours } from '../../config';

function TaskBlock(props) {
    // props: {subjectName, task, week}
    
    const initialStatus = getTaskStatus(props.task, props.week - 1);
    const [state, setState] = React.useState(Object.keys(taskColours).indexOf(initialStatus));
    
    console.log(state);

    const taskBlockStyles = {
        justifySelf: "stretch",
        border: "0.4px solid grey",
        // height: 40,
        flexGrow: 1,
        backgroundColor: Object.values(taskColours)[state],
    }

    const cycleStatus = () => {
        console.log(state)
        const newState = (state + 1) % Object.keys(taskColours).length;
        props.subjectName && updateState(props.subjectName, props.task.name, props.week - 1, newState);
        setState(newState);
    }

    return (<Box 
        sx={taskBlockStyles}
        onMouseDown={cycleStatus}
    >
    </Box>);
}

export default TaskBlock;
