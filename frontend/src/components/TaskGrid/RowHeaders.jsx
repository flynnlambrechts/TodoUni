import React from "react";
import { Box } from "@mui/material";
import { NUMWEEKS } from "../../config";
import WeekHeader from "./WeekHeader";

function RowHeaders(props) {
    const headers = [];
    for (let weekIndex = 0; weekIndex < NUMWEEKS; weekIndex++) {
        headers.push(
            <WeekHeader key={"week " + weekIndex} number={weekIndex + 1} />
        );
    }
    headers.push(<WeekHeader key={-1} exam />)
    return (
        <Box
            sx={{
                // border: 1,
                gap: "5px",
                display: "grid",
                gridColumn: "span 1",
                // gridRowStart: 1,
                gridTemplateRows: `repeat(${NUMWEEKS + 3}, 1fr)`
            }}>
            <Box sx={{ gridRow: "span 2",}}></Box>
            {headers}
        </Box>
    );
}

export default RowHeaders;
