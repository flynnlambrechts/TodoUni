import React from "react";
import List from "@mui/material/List";
// import { ListSubheader } from '@mui/material';
import Task from "./Task";
import { ListItem, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";

function Tasklist(props) {
    return (
        <List
            sx={{
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                "& ul": { padding: 0 },
            }}>
            {Object.keys(props.tasks).map((taskName, index) => (
                <Task key={index} name={taskName} />
            ))}

            <ListItem>
                <form>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <TextField label="Add Task" fullWidth />
                        <IconButton edge="end" aria-label="complete">
                            <AddCircleIcon />
                        </IconButton>
                    </Box>
                </form>
            </ListItem>
        </List>
    );
}

export default Tasklist;
