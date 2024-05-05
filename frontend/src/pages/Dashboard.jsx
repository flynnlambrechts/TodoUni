import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import { getStartDateString, getWeekOfTerm, saveStartDate } from '../helpers';
import SubjectList from '../components/SubjectList/SubjectList';
import DatePicker from '../components/DatePicker';
import {daysBetween, parseDate} from '../utils'
import { WEEKDAYS } from '../constants';

function Dashboard (props) {
    const today = new Date();

    const updateTitle = () => {
        let title = `Today is ${WEEKDAYS[today.getDay()]} Week ${getWeekOfTerm(today) + 1}`;
        // const startDate  = getStartDateString();
        // if (startDate) {
        //     let ddays = daysBetween(parseDate(startDate), today);
        //     title += `, ${Math.abs(ddays)} Days ${ddays < 0 ? "Until Term" : "Completed"}`
        // }
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
