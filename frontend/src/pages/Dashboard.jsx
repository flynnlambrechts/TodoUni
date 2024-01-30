import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import { getStartDate, saveStartDate } from '../helpers';
import SubjectList from '../components/SubjectList/SubjectList';
import DatePicker from '../components/DatePicker';
import {daysBetween, parseDate} from '../utils'

function Dashboard (props) {
    const today = new Date();

    const updateTitle = () => {
        let title = `Today is ${today.toDateString()}`;
        const startDate  = getStartDate();
        if (startDate) {
            let ddays = daysBetween(parseDate(startDate), today);
            console.log(new Date(startDate));
            title += `, ${Math.abs(ddays)} days ${ddays < 0 ? "until uni" : "completed"}`
        }
        return title
    }

    const [titleString, setTitleString] = React.useState(updateTitle());
    
    return (
        <Container sx={{maxWidth: 500}}>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: 1}}>

            <Typography variant='h4' gutterBottom>{titleString}</Typography>
            <DatePicker value={getStartDate()} label="Start of Term" onChange={newVal => {saveStartDate(newVal); setTitleString(updateTitle());}}/> 
        </Box>
            <Box>
                <SubjectList />
            </Box>

        </Container>
    );	
}

export default Dashboard;
