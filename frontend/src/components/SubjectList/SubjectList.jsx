import React, { useState } from "react";
import { addSubject, getSubjects } from "../../helpers";
import List from "@mui/material/List";
import SubjectListItem from "./SubjectListItem";
import NewListItem from "./NewListItem";

const SubjectList = () => {
    return (
        <>
            <List>
                {Object.keys(getSubjects()).map((subjectName) => 
                    <SubjectListItem title={subjectName} />
                )}
                <NewListItem onSubmit={(newSubj) => addSubject(newSubj)}></NewListItem>
            </List>
        </>
    );
};

export default SubjectList;
