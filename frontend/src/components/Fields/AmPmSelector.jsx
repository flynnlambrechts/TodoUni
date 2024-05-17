import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const AmPmSelector = (props) => {
    return (
        <Box>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="ampm-label">AM/PM</InputLabel>
                <Select
                    name={props.name}
                    labelId="ampm-label"
                    id="ampm-select"
                    defaultValue={"AM"}
                    onChange={props.onChange}
                    label="AM/PM">
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="PM">PM</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default AmPmSelector;
