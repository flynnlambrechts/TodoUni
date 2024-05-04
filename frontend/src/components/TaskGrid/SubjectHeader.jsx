import React from "react";
import { Box, Typography } from "@mui/material";

function SubjectHeader(props) {
    // props: {numTasks}
    const taskBlockStyles = {
        justifySelf: "stretch",
        textAlign: "center",
        gridColumn: "span " + props.numTasks,
        border: 1,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Box sx={taskBlockStyles}>
            <Typography variant="h5">{props.name}</Typography>
        </Box>
    );
}

export default SubjectHeader;
