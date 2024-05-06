import React from "react";
import {
    List,
    Typography,
    Grid,
    Card,
    CardContent,
    IconButton,
} from "@mui/material";
import GradeItem from "./GradeItem";
import AddIcon from "@mui/icons-material/Add";
import PercentIcon from "@mui/icons-material/Percent";

function SubjectGrades({
    subjectName,
    gradeItems,
    onAddGradeItem,
    onRemoveGradeItem,
}) {
    const calculateTotalMark = () => {
        return gradeItems.reduce(
            (total, item) => total + parseFloat(item.mark || 0),
            0
        );
    };

    const calculateSubtotal = () => {
        return gradeItems.reduce((subtotal, item) => {
            if (item.weighting && parseFloat(item.weighting) > 0) {
                return (
                    subtotal +
                    parseFloat(item.mark || 0) * parseFloat(item.weighting)
                );
            } else {
                return subtotal;
            }
        }, 0);
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {subjectName}
                </Typography>
                <List>
                    {gradeItems.map((item, index) => (
                        <GradeItem
                            key={index}
                            onRemove={() => onRemoveGradeItem(index)}
                        />
                    ))}
                </List>
                <Grid container alignItems="center" justifyContent="flex-end">
                    <IconButton onClick={onAddGradeItem} color="primary">
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop={2}>
                    <Grid item>
                        <Typography variant="h6">Total:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            {calculateTotalMark()}
                            <PercentIcon />
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Subtotal:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            {calculateSubtotal()}
                            <PercentIcon />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SubjectGrades;
