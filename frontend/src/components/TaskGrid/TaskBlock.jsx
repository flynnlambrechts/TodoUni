import React from "react";
import {
    getTaskStatus,
    updateState,
    getNameOfState,
    getIndexOfStatus,
    capitalizeFirstLetter,
} from "../../helpers";
import ButtonBase from "@mui/material/ButtonBase";
import { statuses } from "../../config";
import { ThemeContext } from "../../wrappers/Theme";
import Tooltip from "@mui/material/Tooltip";
import { TickIcon } from "../TickIcon/TickIcon";
import { AlertIcon } from "../../Icons/AlertIcon/AlertIcon";
import WaitIcon from "../../Icons/WaitIcon/WaitIcon";
import { Box } from "@mui/material";

function StateStyles(stateName) {
    const theme = React.useContext(ThemeContext).theme;
    const palette = theme.palette;

    const darkOrLight = (colors) =>
        palette.mode === "dark" ? colors.dark : colors.light;
    const generateStyles = (colors) => {
        return {
            backgroundColor: colors.main,
            color: colors.main,
            "&:hover": {
                color: "text.primary",
                backgroundColor: darkOrLight(colors),
            },
        };
    };

    const stateStyles = {
        none: { border: "1px solid " + palette.text.primary, color: "background.paper", "&:hover": {color: "text.primary"} },
        partial: generateStyles(palette.warning),
        behind: generateStyles(palette.error),
        done: generateStyles(palette.success),
        na: { backgroundColor: "", color: "background.default" },
        locked: { backgroundColor: "unset" },
    };
    return stateStyles[stateName];
}

function TaskBlock(props) {
    const initialStatus = getTaskStatus(props.task, props.week);
    const [state, setState] = React.useState(getIndexOfStatus(initialStatus));

    const stateName = getNameOfState(state);

    const taskBlockStyles = {
        // border: "0.4px solid grey",
        // flexGrow: 1,
        // width: "100%",
        // height: 50,
        gridRow: "span 1",
        borderRadius: 3,
        ...StateStyles(stateName),
        focusRipple: true,
    };

    const icons = {
        done: <TickIcon />,
        behind: <AlertIcon />,
        partial: <WaitIcon />
    }

    const getNextState = () => {
        let newState = (state + 1) % statuses.length;
        if (getNameOfState(newState) === "locked" && statuses.length !== 1) {
            newState = (state + 2) % statuses.length;
        }
        return newState;
    };

    const cycleStatus = () => {
        console.log(props.week);
        if (initialStatus === "locked") {
            return;
        }
        const newState = getNextState();
        props.subjectName &&
            updateState(
                props.subjectName,
                props.task.name,
                props.week,
                newState
            );
        setState(newState);
    };

    return (
        // <Tooltip  arrow>
            <Box sx={taskBlockStyles} onMouseDown={cycleStatus}>
                <ButtonBase sx={{width: "100%", height: "100%"}}>
                {icons[stateName]}&nbsp;{capitalizeFirstLetter(stateName)}
            </ButtonBase>
            </Box>
        // </Tooltip>
    );
}

export default TaskBlock;
