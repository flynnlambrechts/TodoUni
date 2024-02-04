import React from "react";
import { Box, Checkbox, ListItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import DayOfWeekPicker from "../DayOfTheWeekPicker";
import NumberField from "../NumberField";
import AmPmSelector from "../AmPmSelector";
import { addTask } from "../../helpers";
import ToggleButton from "@mui/material/ToggleButton";

function AddTaskListItem(props) {
    // props = {subjectId, ?onSave}
    const [recurring, setRecuring] = React.useState(true);
    const [selectedDays, setSelectedDays] = React.useState([]);
    const [formData, setFormData] = React.useState({});

    const handleSave = () => {
        const taskData = {
            recurring,
            ampm: "AM",
            selectedDays,
            ...formData,
            occurances: {}
        };
        addTask(props.subjectId, taskData);
        if (props.onSave) {
            props.onSave();
        }
    };

    const handleInputChange = (e) => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };
    return (
        <ListItem
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSave(e);
            }}
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid container spacing={1}>
                <Grid xs={2}>
                    <TextField
                        name="name"
                        label="Name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid xs={1}>
                    <ToggleButton
                        selected={recurring}
                        onChange={(e) => {
                            setRecuring(!recurring);
                        }}
                        size="large"
                        fullWidth>
                        Recur
                    </ToggleButton>
                </Grid>
                <Grid xs={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <NumberField
                            name="hour"
                            label="Hour"
                            min={1}
                            max={12}
                            onChange={handleInputChange}
                        />
                        <Typography>:</Typography>
                        <NumberField
                            label="Minute"
                            name="minute"
                            min={0}
                            max={59}
                            onChange={handleInputChange}
                        />
                    </Box>
                </Grid>
                <Grid xs={1}>
                    <AmPmSelector name="ampm" onChange={handleInputChange} />
                </Grid>

                <Grid xs={1}>
                    <NumberField
                        label="Duration (mins)"
                        name="duration"
                        min={0}
                        max={120}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid xs={4}>
                    <DayOfWeekPicker
                        selectedDays={selectedDays}
                        onDayChange={setSelectedDays}
                    />
                </Grid>

                {!recurring && (
                    <Grid xs={2}>
                        <NumberField
                            name="week"
                            label="Week"
                            min={0}
                            max={13}
                            onChange={handleInputChange}
                        />
                    </Grid>
                )}
                <Grid>
                    <Button
                        xs={1}
                        type="submit"
                        size="large"
                        variant="contained">
                        Done
                    </Button>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default AddTaskListItem;
