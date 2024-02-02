import React from "react";
import GridContainer from "../components/TaskGrid/GridContainer";
import WeekHeader from "../components/TaskGrid/WeekHeader";
import TaskBlock from "../components/TaskGrid/TaskBlock";
import TaskHeader from "../components/TaskGrid/TaskHeader";
import SubjectHeader from "../components/TaskGrid/SubjectHeader";
import { NUMWEEKS } from "../config";

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

    const subjects = JSON.parse(localStorage.getItem("data")).subjects;

    const extractTaskNames = (subjects) => {
        return Object.values(subjects)
            .map((subjectDetails) =>
                subjectDetails.tasks.map((task) => task.name)
            )
            .flat();
    };

    const taskNames = extractTaskNames(subjects);
    const numTasks = taskNames.length;

    const grid = React.useMemo(() => {
        const subjectHeader = [<TaskHeader name={""} key={"blank1"} />];
        Object.keys(subjects).forEach((subjectTitle) =>
            subjectHeader.push(
                <SubjectHeader key={subjectTitle} name={subjectTitle} numTasks={subjects[subjectTitle].tasks.length}/>
            )
        );

        const result = [
            ...subjectHeader,
            <TaskHeader name={""} key={"blank2"} />,
        ];
        for (const [key, taskName] of taskNames.entries()) {
            result.push(<TaskHeader key={key} name={taskName} />);
        }

        let counter = 0;
        for (let weekIndex = 0; weekIndex < NUMWEEKS; weekIndex++) {
            result.push(
                <WeekHeader key={"week" + weekIndex} number={weekIndex + 1} />
            );
            for (const subject of Object.keys(subjects)) {
                for (const task of subjects[subject].tasks) {
                    result.push(
                        <TaskBlock
                            key={subject + " " + counter++}
                            subjectName={subject}
                            task={task}
                            week={weekIndex + 1}
                        />
                    );
                }
            }
        }
        return result;
    }, []);

    return (
        <GridContainer rows={NUMWEEKS} cols={numTasks}>
            {grid}
        </GridContainer>
    );
}

export default GridView;
