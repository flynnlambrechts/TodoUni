import React, { useState } from "react";
import { List, Typography, Card, CardHeader, CardContent } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TaskListItem from "./TaskListItem";
import SubjectControls from "./SubjectControls";
import AddTaskListItem from "./AddTaskListItem";
import { getTasks } from "../../helpers";

function SubjectListItem(props) {
    const [open, setOpen] = useState(true);
    const [addTask, setAddTask] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <Card variant="outlined">
            <CardHeader
                onClick={toggleOpen}
                title={<Typography variant="h5">{props.title}</Typography>}
                action={open ? <ExpandLess /> : <ExpandMore />}
            />

            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent>
                    <List
                        component="div"
                        disablePadding
                        sx={{ paddingLeft: 2 }}>
                        {getTasks(props.title).map((task) => (
                            <TaskListItem
                                key={task.id}
                                subjectId={props.title}
                                data={task}
                            />
                        ))}
                        {addTask && (
                            <AddTaskListItem
                                subjectId={props.title}
                                onSave={() => setAddTask(false)}
                            />
                        )}
                    </List>
                </CardContent>
                <SubjectControls
                    name={props.title}
                    onDelete={props.onDelete}
                    openAddTask={() => setAddTask(true)}
                />
            </Collapse>
        </Card>
    );
}

export default SubjectListItem;
