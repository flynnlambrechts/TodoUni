import React from "react";
import { ListItem, ListItemText, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { DeleteOutline } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { deleteTask } from "../../helpers";

function TaskListItem(props) {
    // props: {subjectId, data: {name, hour, minute, ampm, recurring, selectedDays: [], week?, duration?}}
    const data = props.data;
    return (
        <ListItem
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
            secondaryAction={
                <Tooltip title={"Delete Task"} placement="right">
                    <IconButton
                        onClick={() => deleteTask(props.subjectId, data.name)}>
                        <DeleteOutline></DeleteOutline>
                    </IconButton>
                </Tooltip>
            }>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6} sm={5}>
                    <ListItemText>{data.name}</ListItemText>
                </Grid>
                <Grid xs={5} sm={2}>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <ListItemText>
                        {data.hour}:
                        {data.minute ? data.minute.padStart(2, "0") : "00"}{" "}
                        {data.ampm}
                    </ListItemText>
                </Grid>
                <Grid xs={6} sm={2}>
                    <ListItemText>
                        {data.recurring ? "Recurs" : "Week " + data.week}
                    </ListItemText>
                </Grid>
                <Grid xs={6} sm={2}>
                    {data.selectedDays.map((day) => day)}
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default TaskListItem;
