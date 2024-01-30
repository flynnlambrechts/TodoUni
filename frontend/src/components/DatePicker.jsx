import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


function DatePicker(props) {
    // on submit executes the props.onChange function with the new value as
    // the param
    const [date, setDate] = React.useState(props.value);

    const onDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    };

    const onDateSet = (e) => {
        e.preventDefault();
        console.log(date);
        if (props.onChange) {
            props.onChange(date);
        }
    };

    function SubmitButton() {
        return                <Button
        variant="outlined"
        type="submit"
        onClick={onDateSet}
    
        >
        {date ? "Update" : "Set"}
    </Button>
    }

    return (
        <Box>
        <form>
                <TextField
                    label={props.label}
                    placeholder="dd/mm/yy"
                    value={date}
                    onChange={onDateChange}
                    InputProps={{endAdornment: <SubmitButton />}}
                    
                />
 
            </form>
        </Box>
    );
}

export default DatePicker;
