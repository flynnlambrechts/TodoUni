import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function Task(props) {

    return (<ListItem>
        <ListItemText primary={props.name} />
    </ListItem>);
}

export default Task;
