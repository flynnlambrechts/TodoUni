import React from 'react';
import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import Task from './Task';
function Tasklist(props) {

    return (<List
        sx={{
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            '& ul': { padding: 0 },
        }}>
        <ListSubheader>Lectures</ListSubheader>
        <Task />
        <Task />
        <Task />
        <Task />
        <ListSubheader>Quizzes</ListSubheader>
        <ListSubheader>Labs</ListSubheader>

    </List>);
}

export default Tasklist;
