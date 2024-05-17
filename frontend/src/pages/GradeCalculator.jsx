import React, { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import SubjectGrades from "../components/GradeCalculator/SubjectGrades";
import { getSubjects, setGrades } from "../helpers";

function GradeCalculator(props) {
    const subjects = getSubjects();

    const initialLists = [];
    for (const subject of Object.keys(subjects)) {
        // console.log(subjects[subject].grades.length);
        initialLists.push({
            subjectName: subject,
            gradeItems: subjects[subject].grades || [],
        });
    }
    console.log(initialLists);
    const [lists, setLists] = useState(initialLists);

    const handleAddGradeItem = (index) => {
        const newLists = [...lists];
        newLists[index].gradeItems.push({});
        setLists(newLists);
    };

    const handleRemoveGradeItem = (listIndex, itemIndex) => {
        const newLists = [...lists];
        newLists[listIndex].gradeItems.splice(itemIndex, 1);
        setLists(newLists);
        setGrades(
            newLists[listIndex].subjectName,
            newLists[listIndex].gradeItems
        );
    };

    const handleGradeChange = (listIndex, grades) => {
        const newLists = [...lists];
        newLists[listIndex].gradeItems = grades;

        setLists(newLists);
        setGrades(newLists[listIndex].subjectName, grades);
    };

    return (
        <Container>
            <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Grade Calculator
            </Typography>
            {lists.map((list, index) => (
                <Box
                    key={"" + index + Object.values(list.gradeItems)}
                    marginBottom={index !== lists.length - 1 ? 2 : 0}>
                    <SubjectGrades
                        subjectName={list.subjectName}
                        gradeItems={list.gradeItems}
                        onChange={(grades) => handleGradeChange(index, grades)}
                        onAddGradeItem={() => handleAddGradeItem(index)}
                        onRemoveGradeItem={(itemIndex) =>
                            handleRemoveGradeItem(index, itemIndex)
                        }
                    />
                </Box>
            ))}
        </Container>
    );
}

export default GradeCalculator;
