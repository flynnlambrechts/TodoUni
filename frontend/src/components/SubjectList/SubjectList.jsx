import React, { useState } from "react";
import { addSubject, getSubjects } from "../../helpers";
import List from "@mui/material/List";
import SubjectListItem from "./SubjectListItem";
import NewListItem from "./NewListItem";
import { Box } from "@mui/material";

const SubjectList = () => {
    return (
        <>
            <List sx={{display: "flex", flexDirection: "column", gap: 2}}>

                {Object.keys(getSubjects()).map((subjectName) => 
                    <SubjectListItem title={subjectName} />
                )}
                <NewListItem onSubmit={(newSubj) => addSubject(newSubj)}></NewListItem>
            </List>
        </>
    );
};

export default SubjectList;
