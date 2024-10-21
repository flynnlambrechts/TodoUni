import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

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
        if (props.onChange) {
            props.onChange(date);
        }
    };

    function SubmitButton() {
        return (
            <Button
                fullWidth
                variant="outlined"
                type="submit"
                sx={{ height: "100%" }}
                onClick={onDateSet}>
                {date ? "Update" : "Set"}
            </Button>
        );
    }

    return (
        <Box>
            <form>
                <Grid container sx={{ flexGrow: 1 }}>
                    <Grid xs={12} md={9}>
                        <TextField
                            label={props.label}
                            placeholder="dd/mm/yy"
                            value={date}
                            fullWidth
                            onChange={onDateChange}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <SubmitButton />
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default DatePicker;
