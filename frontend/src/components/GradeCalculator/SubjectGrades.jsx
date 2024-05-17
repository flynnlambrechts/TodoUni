import React from "react";
import {
    List,
    Typography,
    Grid,
    Card,
    CardContent,
    IconButton,
    Box,
    CardActions,
} from "@mui/material";
import GradeItem from "./GradeItem";
import AddIcon from "@mui/icons-material/Add";
import PercentIcon from "@mui/icons-material/Percent";
import { calculateIndividualMark } from "../../helpers";

function SubjectGrades({
    subjectName,
    gradeItems,
    onChange,
    onAddGradeItem,
    onRemoveGradeItem,
}) {
    const [totals, setTotals] = React.useState({ Subtotal: 0, Total: 0 });
    React.useEffect(() => {
        const calculateTotalMark = () => {
            return gradeItems.reduce((total, item) => {
                if (item.mark && item.maximum) {
                    return (
                        total +
                        calculateIndividualMark(item) *
                            parseFloat(item.weighting)
                    );
                }
                return total;
            }, 0);
        };

        const calculateSubtotal = () => {
            let sumproduct = 0;
            let totalWeight = 0;

            gradeItems.forEach((item) => {
                if (
                    item.weighting &&
                    parseFloat(item.weighting) > 0 &&
                    item.maximum
                ) {
                    const weighting = parseFloat(item.weighting);
                    sumproduct += calculateIndividualMark(item) * weighting;
                    totalWeight += weighting;
                }
            });
            return totalWeight === 0
                ? 0
                : Math.round((sumproduct / totalWeight) * 10000) / 100;
        };
        setTotals({
            Subtotal: calculateSubtotal(),
            Total: calculateTotalMark(),
        });
    }, [gradeItems]);

    const Total = ({ name, value }) => {
        return (
            <Box sx={{ display: "flex", gap: 1 }}>
                <Typography variant="h6">{name}:</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6">{value}</Typography>
                    <PercentIcon />
                </Box>
            </Box>
        );
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
                            initial_val={item}
                            onChange={(data) => {
                                const newGrades = [...gradeItems];
                                newGrades[index] = data;
                                onChange(newGrades);
                            }}
                            onRemove={() => onRemoveGradeItem(index)}
                        />
                    ))}
                </List>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    gap={3}
                    marginTop={2}>
                    <Total name="Subtotal" value={totals.Subtotal} />
                    <Total name="Total" value={totals.Total} />
                </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={onAddGradeItem} color="primary">
                    <AddIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default SubjectGrades;
