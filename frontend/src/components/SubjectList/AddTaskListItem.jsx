import React, { useState } from "react";
import { Box, Checkbox, ListItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DayOfWeekPicker from "../DayOfTheWeekPicker";
import NumberField from "../NumberField";
import AmPmSelector from "../AmPmSelector";
import { addTask } from "../../helpers";
import ToggleButton from "@mui/material/ToggleButton";

function AddTaskListItem(props) {
    const [recurring, setRecurring] = useState(true);
    const [selectedDays, setSelectedDays] = useState([]);
    const [formData, setFormData] = useState({});

    const handleSave = (e) => {
        e.preventDefault();
        const taskData = {
            recurring,
            ampm: "AM",
            selectedDays,
            ...formData,
            occurrences: {},
        };
        addTask(props.subjectId, taskData);
        if (props.onSave) {
            props.onSave();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <ListItem
            component="form"
            onSubmit={handleSave}
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        name="name"
                        label="Name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={1}>
                    <ToggleButton
                        selected={recurring}
                        onChange={() => setRecurring(!recurring)}
                        size="large"
                        fullWidth>
                        Recur
                    </ToggleButton>
                </Grid>
                <Grid item xs={6} sm={3}>
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
                <Grid item xs={1}>
                    <AmPmSelector name="ampm" onChange={handleInputChange} />
                </Grid>
                <Grid item xs={2}>
                    <NumberField
                        fullWidth
                        label="Duration (mins)"
                        name="duration"
                        min={0}
                        max={120}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <DayOfWeekPicker
                        selectedDays={selectedDays}
                        onDayChange={setSelectedDays}
                    />
                </Grid>
                {!recurring && (
                    <Grid item xs={2}>
                        <NumberField
                            fullWidth
                            name="week"
                            label="Week"
                            min={0}
                            max={13}
                            onChange={handleInputChange}
                        />
                    </Grid>
                )}
                <Grid item xs={2}>
                    <Button
                        fullWidth
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
