import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import { getStartDateString, getTasksBeforeDate, getWeekOfTerm, saveStartDate } from '../helpers';
import SubjectList from '../components/SubjectList/SubjectList';
import DatePicker from '../components/DatePicker';
import {daysBetween, parseDate} from '../utils'

function Dashboard (props) {
    const today = new Date();

    const updateTitle = () => {
        let title = `Today is ${today.toDateString()}`;
        const startDate  = getStartDateString();
        if (startDate) {
            let ddays = daysBetween(parseDate(startDate), today);
            title += `, ${Math.abs(ddays)} days ${ddays < 0 ? "until uni" : "completed"}, week ${getWeekOfTerm(new Date()) + 1}`
        }
        return title
    }

    const [titleString, setTitleString] = React.useState(updateTitle());
    return (
        <Container sx={{maxWidth: 500}}>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: 1}}>

            <Typography variant='h4' gutterBottom>{titleString}</Typography>
            <DatePicker value={getStartDateString()} label="Start of Term" onChange={newVal => {saveStartDate(newVal); setTitleString(updateTitle());}}/> 
        </Box>
            <Box>
                <SubjectList />
            </Box>

        </Container>
    );	
}

export default Dashboard;
