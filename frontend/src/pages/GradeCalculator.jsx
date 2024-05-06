import React, { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import SubjectGrades from "../components/GradeCalculator/SubjectGrades";

function GradeCalculator(props) {
    const [lists, setLists] = useState([]);

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

    const handleAddList = () => {
        setLists([...lists, { subjectName: "COMP3821", gradeItems: [{}] }]);
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
            <Button onClick={handleAddList} variant="contained" color="primary">
                Add Subject
            </Button>
        </Container>
    );
}

export default GradeCalculator;
