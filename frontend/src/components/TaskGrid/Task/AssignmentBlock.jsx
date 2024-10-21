import React from "react";
import TaskBlockBase from "./TaskBlockBase";
import { getExam, updateExam } from "../../../helpers";

function AssignmentBlock(props) {
    const onStateChange = (state) => {
        updateExam(props.subjectName, state);
    };
    const initialStatus = getExam(props.subjectName);
    return (
        <>
            <TaskBlockBase
                initialStatus={initialStatus}
                onStateChange={onStateChange}
                width={props.width}
                height={1}
                states={["na", "none", "done"]}
            />
        </>
    );
}

export default AssignmentBlock;
