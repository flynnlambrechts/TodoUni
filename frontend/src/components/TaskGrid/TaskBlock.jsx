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

function StateStyles(stateName) {
    const theme = React.useContext(ThemeContext).theme;
    const palette = theme.palette;

    const darkOrLight = (colors) =>
        palette.mode === "dark" ? colors.dark : colors.light;
    const generateStyles = (colors) => {
        return {
            backgroundColor: colors.main,
            "&:hover": {
                backgroundColor: darkOrLight(colors),
            },
        };
    };

    const stateStyles = {
        none: { border: "1px solid" },
        partial: generateStyles(palette.warning),
        behind: generateStyles(palette.error),
        done: generateStyles(palette.success),
        na: { backgroundColor: "" },
        locked: { backgroundColor: "unset" },
    };
    return stateStyles[stateName];
}

function TaskBlock(props) {
    const initialStatus = getTaskStatus(props.task, props.week);
    const [state, setState] = React.useState(getIndexOfStatus(initialStatus));

    const stateName = getNameOfState(state);

    const taskBlockStyles = {
        justifySelf: "stretch",
        // border: "0.4px solid grey",
        flexGrow: 1,
        borderRadius: "10px",
        ...StateStyles(stateName),
        focusRipple: true,
    };

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
        <Tooltip title={capitalizeFirstLetter(stateName)} arrow>
            <ButtonBase sx={taskBlockStyles} onMouseDown={cycleStatus}>
                {/* { getNameOfState(state)} {state} {props.week} */}
            </ButtonBase>
        </Tooltip>
    );
}

export default TaskBlock;
