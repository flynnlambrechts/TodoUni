import React from "react";

import {
    capitalizeFirstLetter,
} from "../../../utils";
import ButtonBase from "@mui/material/ButtonBase";
// import { statuses } from "../../../config";
import { ThemeContext } from "../../../wrappers/Theme";
import { TickIcon } from "../../TickIcon/TickIcon";
import { AlertIcon } from "../../../Icons/AlertIcon/AlertIcon";
import WaitIcon from "../../../Icons/WaitIcon/WaitIcon";
import { Paper } from "@mui/material";
import { PaintContext } from "../GridContainer";

function StateStyles(stateName) {
    const theme = React.useContext(ThemeContext).theme;
    const palette = theme.palette;

    const generateStyles = (colors) => {
        return {
            backgroundColor: colors.main,
            color: colors.contrastText,
        };
    };

    const stateStyles = {
        none: {
            border: "1px solid " + palette.text.primary,
            color: "background.paper",
            "&:hover": { color: "text.primary" },
        },
        partial: generateStyles(palette.warning),
        behind: generateStyles(palette.error),
        done: generateStyles(palette.success),
        na: { backgroundColor: "", color: "background.default" },
        locked: { backgroundColor: "unset" },
    };
    return stateStyles[stateName];
}

function TaskBlockBase(props) {    
    const [state, setState] = React.useState(props.initialStatus);
    const [elevation, setElevation] = React.useState(0);
    const [textColor, setTextColor] = React.useState("transparent");
    const {paintState, setPaintState} = React.useContext(PaintContext);

    const handleMouseDown = () => {
        const newState = getNextState();
        setPaintState(newState);
        updateState(newState);
    }

    const handleMouseEnter = () => {
        if (paintState) {
            updateState(paintState)
        } else if (state !== "na") {
            setElevation(10);
            setTextColor();
        }
    };

    const handleMouseLeave = () => {
        setElevation(0);
        setTextColor("transparent");
    };

    const taskBlockStyles = {
        gridRow: "span " + props.height,
        gridColumn: "span " + props.width,
        // overflow: "scroll",
        borderRadius: 3,
        ...StateStyles(state),
        focusRipple: true,
    };

    const icons = {
        done: <TickIcon />,
        behind: <AlertIcon />,
        partial: <WaitIcon />,
    };

    const getNextState = () => {
        let newState;
        if (props.states.indexOf(state) === -1) {
            newState = props.states[0];
        } else {
            newState = props.states[(props.states.indexOf(state) + 1) % props.states.length];
        }
        // if (newState === "locked" && props.states.length !== 1) {
        //     // newState = getNextState();
        // }
        return newState;
    };

    const updateState = (newState) => {
        props.onStateChange && props.onStateChange(newState);
        setState(newState);
    }

    const cycleStatus = () => {
        if (props.initialStatus === "locked") {
            return;
        }
    };

    return (
        <>
            <Paper
                elevation={elevation}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ ...taskBlockStyles, color: textColor }}
                onMouseDown={handleMouseDown}>
                <ButtonBase sx={{ width: "100%", height: "100%" }}>
                    {icons[state]}&nbsp;
                    {state !== "none" && state && typeof state == "string" && capitalizeFirstLetter(state)}
                </ButtonBase>
            </Paper>
        </>
    );
}

export default TaskBlockBase;
