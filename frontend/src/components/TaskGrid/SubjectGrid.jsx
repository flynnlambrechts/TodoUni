import React from "react";
import { Box, Paper } from "@mui/material";
import SubjectHeader from "./SubjectHeader";
import TaskHeader from "./TaskHeader";
import TaskBlock from "./Task/TaskBlock";
import { NUMWEEKS } from "../../config";
import ExamBlock from "./Task/ExamBlock";

const TaskColumn = (subjectName, task, key) => {
    const result = [];
    for (let weekIndex = 0; weekIndex < NUMWEEKS; weekIndex++) {
        result.push(
            <TaskBlock
                tooltip={`${task.name} Week ${weekIndex + 1}`}
                key={task.name + task.week + " " + weekIndex}
                subjectName={subjectName}
                task={task}
                week={weekIndex}
            />
        );
    }
    return (
        <Box
            key={key}
            sx={{
                display: "grid",
                justifyItems: "stretch",
                alignItems: "stretch",
                gridColumn: "span 1",
                gridRow: "span " + (NUMWEEKS + 1),
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
        gridTemplateRows: `1fr 1fr repeat(${NUMWEEKS + 1}, 1fr)`,
    };

    const taskColumns = [];

    let counter = 0;
    for (const task of tasks) {
        taskColumns.push(TaskColumn(subjectName, task, counter));
        counter += 1;
    }

    return (
        <Box sx={containerStyles}>
            <SubjectHeader name={subjectName} numTasks={tasks.length} />
            {taskColumns}
            <ExamBlock subjectName={subjectName} width={tasks.length} />
        </Box>
    );
}

export default SubjectGrid;
