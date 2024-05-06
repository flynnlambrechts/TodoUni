import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

const DayOfWeekPicker = ({ selectedDays, onDayChange }) => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const handleDayChange = (_, newDays) => {
        onDayChange(newDays);
    };

    return (
        <Box>
            <ToggleButtonGroup
                value={selectedDays}
                onChange={handleDayChange}
                aria-label="Days of the week"
                fullWidth
                exclusive
                size="large">
                {daysOfWeek.map((day) => (
                    <ToggleButton key={day} value={day} disablePadding>
                        {day.charAt(0)}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};

export default DayOfWeekPicker;
