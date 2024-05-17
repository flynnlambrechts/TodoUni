import React from "react";
import { Container, Typography, Box } from "@mui/material";

import { getStartDateString, getWeekOfTerm, saveStartDate } from "../helpers";
import SubjectList from "../components/SubjectList/SubjectList";
import DatePicker from "../components/Fields/DatePicker";
// import { daysBetween, parseDate } from "../utils";
import { WEEKDAYS } from "../constants";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Dashboard(props) {
    const today = new Date();

    const updateTitle = () => {
        let title = [
            `Today is ${WEEKDAYS[today.getDay()]}`,
            `Week ${getWeekOfTerm(today) + 1}`,
        ];
        // const startDate  = getStartDateString();
        // if (startDate) {
        //     let ddays = daysBetween(parseDate(startDate), today);
        //     title += `, ${Math.abs(ddays)} Days ${ddays < 0 ? "Until Term" : "Completed"}`
        // }
        return title;
    };

    const [titleString, setTitleString] = React.useState(updateTitle());
    return (
        <Container>
            <Grid container>
                <Grid
                    xs={8}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            display: { xs: "none", sm: "block" },
                            margin: 0,
                        }}>
                        {titleString[0]}&nbsp;
                    </Typography>
                    <Typography variant="h4">{titleString[1]}</Typography>
                </Grid>
                <Grid xs={4}>
                    <DatePicker
                        value={getStartDateString()}
                        label="Start of Term"
                        onChange={(newVal) => {
                            saveStartDate(newVal);
                            setTitleString(updateTitle());
                        }}
                    />
                </Grid>
            </Grid>
            <Box>
                <SubjectList />
            </Box>
        </Container>
    );
}

export default Dashboard;
