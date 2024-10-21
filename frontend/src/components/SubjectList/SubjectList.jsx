import React, { useState, useEffect } from "react";
import { addSubject, getSubjects } from "../../helpers";
import List from "@mui/material/List";
import SubjectListItem from "./SubjectListItem";
import NewListItem from "./NewListItem";

const SubjectList = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setSubjects(getSubjects());
    }, []);

    const handleAddSubject = (newSubj) => {
        addSubject(newSubj);
        setSubjects(getSubjects());
    };

    return (
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {Object.keys(subjects).map((subjectName) => (
                <SubjectListItem
                    key={subjectName}
                    title={subjectName}
                    onDelete={() => setSubjects(getSubjects())}
                />
            ))}
            <NewListItem onSubmit={handleAddSubject} />
        </List>
    );
};

export default SubjectList;
