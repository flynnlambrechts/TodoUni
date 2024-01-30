import React from 'react';
import { CardActions, CardContent, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Tasklist from './TaskList/Tasklist';
import DeleteIcon from '@mui/icons-material/Delete';

import { getSubjects, removeSubject } from '../helpers';

function SubjectBlock(props) {
    const tasks = getSubjects()[props.title].tasks;
    return (<Grid xs={12} md={4}>
        <Card>
            <CardHeader title={props.title} />
            <CardContent>
                <Tasklist tasks={tasks} />
            </CardContent>
            <CardActions> 
                <IconButton onClick={() => removeSubject(props.title)}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    </Grid >);
}

export default SubjectBlock;
