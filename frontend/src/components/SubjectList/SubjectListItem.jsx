import React from "react";
import {
    List,
    ListItemText,
    ListItemButton,
    Box,
    Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TaskListItem from "./TaskListItem";

import SubjectControlsListItem from "./SubjectControlsListItem";
import AddTaskListItem from "./AddTaskListItem";
import { getTasks } from "../../helpers";

function SubjectListItem(props) {
    const [open, setOpen] = React.useState(true);
    const [addTask, setAddTask] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ border: 1, borderRadius: "5px" }}>
            <ListItemButton
                onClick={handleClick}>
                <ListItemText>
                    <Typography variant="h6">{props.title}</Typography>
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
                    {getTasks(props.title).map((task) => (
                        <TaskListItem subjectId={props.title} data={task} />
                    ))}
                    {addTask && (
                        <AddTaskListItem
                            subjectId={props.title}
                            onSave={() => setAddTask(false)}
                        />
                    )}
                </List>
                <SubjectControlsListItem
                    name={props.title}
                    openAddTask={() => setAddTask(true)}
                />
            </Collapse>
        </Box>
    );
}

export default SubjectListItem;
