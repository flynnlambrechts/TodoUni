import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const NumberField = (props) => {
    const [numericValue, setNumericValue] = useState("");

    const handleInputChange = (event) => {
        // Allow only numeric input
        let inputValue = event.target.value;
        if (isNumber(inputValue)) {
            inputValue = parseFloat(inputValue);
        }

        if (props.onChange && !isError(numericValue)) {
            event.target.value = inputValue;
            props.onChange(event);
        }

        setNumericValue(inputValue);
    };
    const isNumber = (numericValue) => !isNaN(parseFloat(numericValue));
    const isError = (numericValue) =>
        numericValue !== "" && !isNumber(numericValue);
    const belowMin = (numericValue) =>
        props.min && isNumber(numericValue) && numericValue < props.min;
    const aboveMax = (numericValue) =>
        props.max && isNumber(numericValue) && numericValue > props.max;
    const helperText = () => {
        if (!isError(numericValue)) {
            return undefined;
        } else if (belowMin(numericValue)) {
            return `Value Must Be Above ${props.min}`;
        } else if (aboveMax(numericValue)) {
            return `Value Must Be Below ${props.max}`;
        }
    };

    return (
        <Box>
            <TextField
                name={props.name}
                label={props.label}
                autoComplete="off"
                error={isError(numericValue)}
                variant="outlined"
                fullWidth
                value={numericValue}
                onChange={handleInputChange}
                helperText={helperText()}
                // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
        </Box>
    );
};

export default NumberField;
