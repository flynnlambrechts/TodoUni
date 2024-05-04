import React from "react";
import { Box } from "@mui/material";
import SubjectHeader from "./SubjectHeader";
import TaskHeader from "./TaskHeader";
import TaskBlock from "./TaskBlock";
import { NUMWEEKS } from "../../config";

const TaskColumn = (subjectName, task) => {
    const result = [];
    for (let weekIndex = 0; weekIndex < NUMWEEKS; weekIndex++) {
        result.push(
            <TaskBlock
                subjectName={subjectName}
                task={task}
                week={weekIndex + 1}
            />
        );
    }
    return (
        <Box
            sx={{
                display: "grid",
                justifyItems: "stretch",
                alignItems: "stretch",
                gridColumn: "span 1",
                gridRow: "span 12",
                gridTemplateRows: "subgrid",
            }}>
            <TaskHeader name={task.name} />
            {result}
        </Box>
    );
};

function SubjectGrid(props) {
    const subjectName = props.name;
    const tasks = props.tasks;

    const containerStyles = {
        // border: "1px solid grey",
        borderRadius: 2,
        display: "grid",
        gridColumn: `span 1`,
        gridColumnGap: "5px",
        gridRowGap: "5px",
        gridTemplateColumns: `repeat(${tasks.length}, 1fr)`,
        gridTemplateRows: `1fr 1fr repeat(11, 1fr)`,
    };

    const taskColumns = [];

    for (const task of tasks) {
        taskColumns.push(TaskColumn(subjectName, task));
    }

    return (
        <Box sx={containerStyles}>
            <SubjectHeader name={subjectName} numTasks={tasks.length} />
            {taskColumns}
        </Box>
    );
}

export default SubjectGrid;
