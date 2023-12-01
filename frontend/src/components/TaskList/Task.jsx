import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import { TickIcon } from '../../Icons/TickIcon/TickIcon';

function Task() {

    return (<ListItem
        secondaryAction={
            <IconButton edge="end" aria-label='complete'>
                <TickIcon sx={{ color: "#477e57" }} />
            </IconButton>
        }

    >
        <ListItemText primary="Monday Lecture w1" />
    </ListItem>);
}

export default Task;
