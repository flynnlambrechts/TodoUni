import React from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PercentageField from "./PercentageField";

function GradeItem() {
    return (
        <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <TextField label="Mark" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <TextField label="Out Of" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <PercentageField
                        label="Weighting"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <TextField
                        label="Bonus Marks"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <TextField
                        label="Late Penalty"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default GradeItem;
