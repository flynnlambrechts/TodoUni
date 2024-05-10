import React, { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import SubjectGrades from "../components/GradeCalculator/SubjectGrades";
import { getSubjects } from "../helpers";

function GradeCalculator(props) {
    const subjects = getSubjects();
    const initiaLists = [];
    for (const subject of Object.keys(subjects)) {
        initiaLists.push({
            subjectName: subject,
            gradeItems: [],
        });
    }

    const [lists, setLists] = useState(initiaLists);
    const handleAddGradeItem = (index) => {
        const newLists = [...lists];
        newLists[index].gradeItems.push({});
        setLists(newLists);
    };

    const handleRemoveGradeItem = (listIndex, itemIndex) => {
        const newLists = [...lists];
        newLists[listIndex].gradeItems.splice(itemIndex, 1);
        setLists(newLists);
    };

    return (
        <Container>
            {lists.map((list, index) => (
                <Box
                    key={index}
                    marginBottom={index !== lists.length - 1 ? 2 : 0}>
                    <SubjectGrades
                        subjectName={list.subjectName}
                        gradeItems={list.gradeItems}
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
