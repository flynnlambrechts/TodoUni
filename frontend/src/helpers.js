import { NUMWEEKS, statuses } from "./config";
import { getISOWeek, parseDate, dayOfWeekToIndex, roundToDecimals } from "./utils";

const blankData = {
    subjects: {}
}


const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}

const saveData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
}

export const getStartDateString = () => {
    const data = getData();
    if (data) {
        return data["startdate"];
    }
    return undefined;
}

export const getStartDate = () => {
    return parseDate(getStartDateString());
}

export const saveStartDate = (newDate) => {
    const data = getData() || blankData;
    data.startdate = newDate;
    saveData(data);
}

export const addSubject = (name) => {
    const data = getData() || blankData;
    if (!data.subjects) {
        data.subjects = {};
    }
    data.subjects[name] = { tasks: [] };
    saveData(data);
}

export const removeSubject = (name) => {
    const data = getData();
    delete data.subjects[name];
    saveData(data);
}

export const renameSubject = (name, newName) => {
    const data = getData();
    data.subjects[newName] = data.subjects[name];
    console.log(data);
    delete data.subjects[name];
    saveData(data);
}

export const getSubjects = () => {
    const data = getData();
    if (data && data.subjects) {
        return data.subjects;
    }
    return {};
}

export const addTask = (subject, task) => {
    const data = getData();
    if (data && data.subjects && data.subjects[subject]) {
        data.subjects[subject].tasks.push(task);
    }
    saveData(data);
}

export const getTasks = (subject) => {
    return getSubjects()[subject].tasks;
}

export const deleteTask = (subjectName, taskName) => {
    const data = getData();
    data.subjects[subjectName].tasks = getTasks(subjectName).filter((task) => task.name !== taskName);
    saveData(data);
}
export const setGrades = (subjectName, grades) => {
    const data = getData();
    data.subjects[subjectName].grades = grades;
    saveData(data);
}

export const updateState = (subjectName, taskName, week, state) => {
    const data = getData();
    const subject = data.subjects[subjectName];
    const targetTask = subject.tasks.find(task => task.name === taskName);
    if (targetTask) {
        if (!targetTask.occurrences) {
            targetTask.occurrences = {};
        }
        targetTask.occurrences[week] = state
    }
    console.log(data);
    saveData(data);
}

export const updateExam = (subjectName, state) => {
    const data = getData();
    const subject = data.subjects[subjectName];
    subject["exam"] = state;
    saveData(data);
}

export const getExam = (subjectName) => {
    const subject = getSubjects()[subjectName];
    return subject.exam;
}

export const getTaskStatus = (task, occurrence) => {
    // console.log(task)
    if (!task || !task.occurrences) return "none";
    if (task.recurring) {
        if (!task.occurrences[occurrence] || task.occurrences[occurrence] === "none") {
            if (new Date().getTime() > getDatesOfTask(task, occurrence + 1).getTime()) {
                return "behind";
            }
            return "none"
        }
        return task.occurrences[occurrence]
    } else if (occurrence !== parseInt(task.week)) {
        console.log(occurrence, parseInt(task.week), task)
        return "locked";
    } else {
        return "none";
        // return Object.keys(statusStyles)[task.occurrences[occurrence]]
    }
}

export const getWeekOfTerm = (date) => {
    // an 0 index (week 1 is week 0)
    const week = getISOWeek(date);
    const startWeek = getISOWeek(getStartDate());
    return week - startWeek;
}

export const getDatesOfTask = (task, occurrence) => {
    // {name, hour, minute, ampm, recurring, selectedDays: [], occurrences: {}, week?, duration?}
    // TODO: This only works for the first day selected of the task e.g. if its [Monday, Friday] is works o
    // off the monday value, some work needs to be done to fix this. Also It's an ugly function
    const startOfTerm = getStartDate();

    const year = new Date(startOfTerm.getFullYear(), 0, 1);
    const week = getISOWeek(startOfTerm) + occurrence;
    console.log(week);
    const timeOfDay = (parseInt(task.hour) % 12 + (task.ampm === 'PM' ? 12 : 0)) * 60 * 60 * 1000 + parseInt(task.minute) * 60 * 1000;
    // console.log(task.selectedDays[0], dayOfWeekToIndex(task.selectedDays[0]))
    const dayOffset = ((week - 1) * 7 + dayOfWeekToIndex(task.selectedDays[0]) - 1) * 24 * 60 * 60 * 1000;
    const resultDate = new Date(year.getTime() + dayOffset + timeOfDay);

    return resultDate;
}

export const getTaskProgressBreakDown = (date) => {
    const counters = { total: 0, before: {}, after: {} };
    const subjects = getSubjects();
    for (const subjectName of Object.keys(subjects)) {
        const tasks = getTasks(subjectName);
        for (const task of tasks) {
            for (let week = 0; week < NUMWEEKS; week++) {
                const status = task.occurrences[week];
                if (getDatesOfTask(task, week) < date) {
                    if (status in counters.before) {
                        counters.before[status] += 1;
                    } else {
                        counters.before[status] = 1;
                    }
                } else {
                    if (status in counters.after) {
                        counters.after[status] += 1;
                    } else {
                        counters.after[status] = 1;
                    }
                }
            }

        }
    }
    return counters;
}
// Progress Bar
export const getFractionOfCompletedTasksToDate = (date) => {
    const breakdown = getTaskProgressBreakDown(date);

    // const counters = {};

    // let completed = 0;
    // let total = 0;


    // const subjects = getSubjects();
    // for (const subjectName of Object.keys(subjects)) {
    //     const tasks = getTasks(subjectName);
    //     for (const task of tasks) {
    //         for (let week = 0; week < Math.min(NUMWEEKS, getWeekOfTerm(date)); week++) {
    //             if (getDatesOfTask(task, week) < date) {
    //                 // TODO: extract this into its own func
    //                 const status = task.occurrences[week];
    //                 if (status in counters) {
    //                     counters[status] += 1;
    //                 } else {
    //                     counters[status] = 1;
    //                 }
    //                 total++;
    //                 if (status) {
    //                     if (status === 'na' || status === "locked") total--;
    //                     if (status === "done") completed++;
    //                 }
    //             }
    //         }
    //     }

    // }
    return 100 / 100;
    // console.log(counters);
    // return total ? completed / total : 0;
}

export const calculateIndividualMark = (grades) => {
    let mark = parseFloat(grades.mark);
    grades.bonus && (mark *= 1 + parseFloat(grades.bonus) / 100);
    grades.penalty && (mark *= 1 - parseFloat(grades.penalty) / 100);
    return roundToDecimals(mark / parseFloat(grades.maximum), 2);
};