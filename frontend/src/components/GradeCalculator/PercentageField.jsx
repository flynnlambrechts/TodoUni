import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PercentIcon from "@mui/icons-material/Percent";

function PercentageField(props) {
    return (
        <TextField
            {...props}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PercentIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default PercentageField;
