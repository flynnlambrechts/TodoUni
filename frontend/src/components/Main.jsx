import React from "react";
import { Container } from "@mui/material";

function Main(props) {
    const style = {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    };
    return (
        <main style={style}>
            <Container
                maxWidth="unset"
                sx={{
                    // border: 1,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 1,
                    boxSizing: "border-box"
                }}>
                {props.children}
            </Container>
        </main>
    );
}

export default Main;
