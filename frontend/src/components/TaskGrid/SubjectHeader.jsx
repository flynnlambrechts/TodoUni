import React from "react";
import { Box, Typography } from "@mui/material";

function SubjectHeader(props) {
    const styles = {
        justifySelf: "stretch",
        textAlign: "center",
        gridColumn: "span " + props.numTasks,
    };

    return (
        <Box sx={styles}>
            <Box
                elevation={1}
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Typography variant="h4" fontWeight="fontWeightMedium">
                    {props.name}
                </Typography>
            </Box>
        </Box>
    );
}

export default SubjectHeader;
