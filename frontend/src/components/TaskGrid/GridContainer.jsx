import { Box } from "@mui/material";
import React from "react";
import RowHeaders from "./RowHeaders";

export const PaintContext = React.createContext();

function GridContainer(props) {
    const [paintState, setPaintState] = React.useState();

    let gridTemplateColumns = "80px ";
    for (const i in props.widths) {
        gridTemplateColumns += `${props.widths[i]}fr `;
    }

    const containerStyles = {
        // border: 1,
        display: "grid",
        columnGap: 2,
        gridTemplateColumns,
        gridTemplateRows: "1fr",
        flexGrow: 1,
    };
    return (
        <>
            <PaintContext.Provider value={{ paintState, setPaintState }}>
                <Box
                    sx={containerStyles}
                    onMouseUp={() => {
                        setPaintState(undefined);
                    }}
                    onMouseLeave={() => {
                        setPaintState(undefined);
                    }}>

                    <RowHeaders />
                    {props.children}
                </Box>
            </PaintContext.Provider>
        </>
    );
}

export default GridContainer;
