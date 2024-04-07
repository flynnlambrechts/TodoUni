import React from "react";
import { Typography, Box } from "@mui/material";
import { TickIcon } from "../Icons/TickIcon/TickIcon";

function ErrorPage(props) {
    return (
        <Box
        // TODO: Dont like using vh here 
            sx={{
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}>
            <TickIcon sx={{ height: 100, width: 100 }} />
            <Typography variant="h4">{props.error}</Typography>
        </Box>
    );
}

export default ErrorPage;
