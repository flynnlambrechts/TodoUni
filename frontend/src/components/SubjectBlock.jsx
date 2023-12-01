import React from 'react';
import { CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Tasklist from './TaskList/Tasklist';

function SubjectBlock() {
    return (<Grid xs={12} md={4}>
        <Card>
            <CardHeader title="COMP6080" />
            <CardContent>
                <Tasklist />
            </CardContent>
        </Card>
    </Grid >);
}

export default SubjectBlock;
