import React from "react";
import TaskBlockBase from "./TaskBlockBase";
import { statuses } from "../../../config";
import { updateState, getTaskStatus } from "../../../helpers";

function TaskBlock(props) {
    const onStateChange = (newState) => {
        props.subjectName &&
            updateState(
                props.subjectName,
                props.task.name,
                props.week,
                newState
            );
    };

    const initialStatus = getTaskStatus(props.task, props.week);

    return (
        <>
            <TaskBlockBase
                initialStatus={initialStatus}
                onStateChange={onStateChange}
                width={1}
                height={1}
                states={statuses}
            />
        </>
    );
}

export default TaskBlock;
