import React from "react";
import { Container, Box } from "@mui/material";

function Main(props) {
    return (<>
            <Box
                component="main"
                sx={{
                    // border: "1px solid red",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 1,
                    boxSizing: "border-box"
                }}>
                {props.children}
            </Box>
    </>);
}

export default Main;
