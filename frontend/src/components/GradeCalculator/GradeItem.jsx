import React from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PercentageField from "./PercentageField";
import { capitalizeFirstLetter } from "../../utils";

const InputField = (props) => {
    return (
        <TextField
            label={capitalizeFirstLetter(props.name)}
            {...props}
            variant="outlined"
            fullWidth
            onChange={props.handleChange}
            value={props.data[props.name]}
        />
    );
};

function GradeItem() {
    const [data, setData] = React.useState({
        name: undefined,
        mark: undefined,
        maximum: undefined,
        weight: undefined,
        bonus: undefined,
        penalty: undefined,
        // bonus: { percentage: undefined, absolute: undefined },
        // penalty: { percentage: undefined, absolute: undefined },
    });

    const handleChange = (e) => {
        e.preventDefault();
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        console.log(newData);
        setData(newData);
    };

    return (
        <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <InputField
                        name="name"
                        onChange={handleChange}
                        data={data}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <InputField
                        name="mark"
                        onChange={handleChange}
                        data={data}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <InputField
                        name="Maximum"
                        label="Out of"
                        onChange={handleChange}
                        data={data}
                    />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <InputField
                        onChange={handleChange}
                        name="weighting"
                        data={data}
                    />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <InputField
                        data={data}
                        onChange={handleChange}
                        name="bonus"
                        label="Bonus Marks"
                    />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <InputField
                        data={data}
                        onChange={handleChange}
                        name="penalty"
                        color="error"
                    />
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default GradeItem;
