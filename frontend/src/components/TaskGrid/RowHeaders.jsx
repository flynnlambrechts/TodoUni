import React from "react";
import { Box } from "@mui/material";
import { NUMWEEKS } from "../../config";
import WeekHeader from "./WeekHeader";

function RowHeaders(props) {
    const headers = [];
    for (let weekIndex = 0; weekIndex < NUMWEEKS; weekIndex++) {
        headers.push(
            <WeekHeader key={"week" + weekIndex} number={weekIndex + 1} />
        );
    }
    headers.push(<WeekHeader exam />)
    return (
        <Box
            sx={{
                // border: 1,
                display: "grid",
                gridColumn: "span 1",
                // gridRowStart: 1,
                gridTemplateRows: "repeat(13, 1fr)" 
            }}>
            <Box sx={{ gridRow: "span 2" }}></Box>
            {headers}
        </Box>
    );
}

export default RowHeaders;
