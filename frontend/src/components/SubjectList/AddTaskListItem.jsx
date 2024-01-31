import React from "react";
import {
    Box,
    Checkbox,
    ListItem,
    TextField,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DayOfWeekPicker from "../DayOfTheWeekPicker";
import NumberField from "../NumberField";
import AmPmSelector from "../AmPmSelector";
import { addTask } from "../../helpers";

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
        }
        addTask(props.subjectId, taskData);
        if (props.onSave) {
            props.onSave();
        }
    };

    const handleInputChange = (e) => {
        const newData = {...formData};
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };
    return (
        <ListItem
            component="form"
            onSubmit={(e) => {e.preventDefault(); handleSave(e)}}
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                    name="name"
                    label="Name"
                    onChange={handleInputChange}
                />
                <label>
                    <Checkbox
                        checked={recurring}
                        onChange={(e) => {setRecuring(!recurring)}}
                        label="Recurring?">
                        Test
                    </Checkbox>
                    Recurrs{" "}
                </label>
                <Box sx={{display:"flex", alignItems:"center", gap: 1}}>
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
                <AmPmSelector name="ampm" onChange={handleInputChange}/>
                <NumberField
                        label="Duration (mins)"
                        name="duration"
                        min={0}
                        max={120}
                        onChange={handleInputChange}
                    />
                <DayOfWeekPicker
                    selectedDays={selectedDays}
                    onDayChange={setSelectedDays}
                />
                {!recurring && <NumberField name="week" label="Week" min={0} max={13} onChange={handleInputChange}/>}
            </Box>
            <Button type="submit">Done</Button>
        </ListItem>
    );
}

export default AddTaskListItem;
