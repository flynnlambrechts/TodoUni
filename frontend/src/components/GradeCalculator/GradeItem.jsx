import React from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import PercentIcon from "@mui/icons-material/Percent";
import { capitalizeFirstLetter } from "../../utils";
import PercentageField from "../Fields/PercentageField";
import { calculateIndividualMark, formatGrade } from "../../helpers";

const InputField = ({ name, onChange, data, color, percentage }) => {
    const props = {
        name: name,
        autoComplete: "off",
        label: capitalizeFirstLetter(name),
        variant: "outlined",
        fullWidth: true,
        onChange: onChange,
        value: data[name],
        color: color,
    };

    return percentage ? (
        <PercentageField {...props} />
    ) : (
        <TextField {...props} />
    );
};

function GradeItem({ initial_val, onChange, onRemove }) {
    const [data, setData] = React.useState(
        initial_val || {
            name: undefined,
            mark: undefined,
            maximum: undefined,
            weight: undefined,
            bonus: undefined,
            penalty: undefined,
            // bonus: { percentage: undefined, absolute: undefined },
            // penalty: { percentage: undefined, absolute: undefined },
        }
    );

    const handleChange = (e) => {
        e.preventDefault();
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        onChange(newData);
        setData(newData);
    };

    return (
        <ListItem>
            <Grid container spacing={1}>
                <Grid item xs={12} md={2}>
                    <InputField
                        name="name"
                        onChange={handleChange}
                        data={data}
                    />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <InputField
                        name="mark"
                        onChange={handleChange}
                        data={data}
                        number
                    />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <InputField
                        name="maximum"
                        label="Out of"
                        onChange={handleChange}
                        data={data}
                        number
                    />
                </Grid>
                <Grid item xs={4} md={1.5}>
                    <InputField
                        onChange={handleChange}
                        name="weighting"
                        data={data}
                        number
                    />
                </Grid>
                <Grid item xs={4} md={1.5}>
                    <InputField
                        data={data}
                        onChange={handleChange}
                        name="bonus"
                        label="Bonus Marks"
                        percentage
                    />
                </Grid>
                <Grid item xs={4} md={1.5}>
                    <InputField
                        data={data}
                        onChange={handleChange}
                        name="penalty"
                        color="error"
                        percentage
                    />
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "100%",
                        }}>
                        <Box></Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6">
                                {formatGrade(calculateIndividualMark(data))}
                            </Typography>
                            <PercentIcon />
                        </Box>
                        <IconButton onClick={onRemove}>
                            <DeleteOutline />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default GradeItem;
