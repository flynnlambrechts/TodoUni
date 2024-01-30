import React from "react";
import {
    ListItem,
    ListItemText,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function TaskListItem(props) {
    // props: {data: {name, hour, minute, ampm, recurring, selectedDays: [], ?week}}
    const data = props.data;
    return (
        <ListItem
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
            secondaryAction={
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={5}>
                    <ListItemText>{data.name}</ListItemText>
                </Grid>
                <Grid xs={3}>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <ListItemText>
                        {data.hour}:{data.minute.padStart(2, "0")} {data.ampm}
                    </ListItemText>
                </Grid>
                <Grid xs={2}>
                    <ListItemText>
                        {data.recurring ? "Recurs" : "Week " + data.week}
                    </ListItemText>
                </Grid>
                <Grid>
                    <ToggleButtonGroup>
                        {data.selectedDays.map((day) => (
                            <ToggleButton color="primary" key={day} value={day}>
                                {day.charAt(0)}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default TaskListItem;
