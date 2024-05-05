import React from "react";
import TaskHeader from "../components/TaskGrid/TaskHeader";
import SubjectHeader from "../components/TaskGrid/SubjectHeader";
import Button from "@mui/material/Button";
import { getSubjects } from "../helpers";
import SubjectGrid from "../components/TaskGrid/SubjectGrid";
import GridContainer from "../components/TaskGrid/GridContainer";

function TaskGrid() {
    const subjects = getSubjects();
    const widths = [];
    const grid = React.useMemo(() => {
        const subjectHeader = [<TaskHeader name={""} key={"blank1"} />];
        Object.keys(subjects).forEach((subjectTitle) =>
            subjectHeader.push(
                <SubjectHeader
                    key={subjectTitle}
                    name={subjectTitle}
                    numTasks={subjects[subjectTitle].tasks.length}
                />
            )
        );

        const result = [];
        for (const subject of Object.keys(subjects)) {
            widths.push(subjects[subject].tasks.length)
            result.push(<SubjectGrid name={subject} tasks={subjects[subject].tasks} />)
        }
        return result;
    }, []);

    return (
        <>  
            <GridContainer widths={widths}>
                {grid}
            </GridContainer>
            <Button>Clear</Button>
        </>
    );
}

function GridView() {
    // const dummyTaskList = [
    //     {
    //         name: "Monday Lecture",
    //         occurances: {
    //             1: {
    //                 "status": 1,
    //             },
    //             2: {
    //                 "status": 2,
    //             }
    //         }
    //     },
    //     {
    //         name: "Friday Lecture",
    //         occurances: ""
    //     },
    //     {
    //         name: "Quiz",
    //         occurances: ""
    //     },
    //     {
    //         name: "Lab",
    //         occurances: ""
    //     },
    // ]

    // const subjects = {
    //     "COMP6080": {
    //         tasks: dummyTaskList
    //     },
    //     "MTRN3500": {
    //         tasks: dummyTaskList
    //     },
    //     "COMP2511": {
    //         tasks: dummyTaskList
    //     },
    // }

    // const data = {
    //     subjects,
    //     startdate: '13/2/2024'
    // }

    // localStorage.setItem("data", JSON.stringify(data))

    return (
        <>
            <TaskGrid />
        </>
    );
}

export default GridView;
