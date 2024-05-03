import { NUMWEEKS, statuses } from "./config";
import { getISOWeek, parseDate, dayOfWeekToIndex } from "./utils";

const blankData = {
    subjects: {}
}

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
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
    localStorage.setItem("data", JSON.stringify(data));
}

export const addSubject = (name) => {
    const data = getData() || blankData;
    if (!data.subjects) {
        data.subjects = {};
    }
    data.subjects[name] = { tasks: [] };
    localStorage.setItem("data", JSON.stringify(data));
}

export const removeSubject = (name) => {
    const data = getData();
    delete data.subjects[name];
    localStorage.setItem("data", JSON.stringify(data));
}

export const renameSubject = (name, newName) => {
    const data = getData();
    data.subjects[newName] = data.subjects[name];
    console.log(data);
    delete data.subjects[name];
    localStorage.setItem("data", JSON.stringify(data));
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
    localStorage.setItem("data", JSON.stringify(data));
}

export const getTasks = (subject) => {
    return getSubjects()[subject].tasks;
}

export const deleteTask = (subjectName, taskName) => {
    const data = getData();
    data.subjects[subjectName].tasks = getTasks(subjectName).filter((task) => task.name !== taskName);
    localStorage.setItem("data", JSON.stringify(data));
}

export const getNameOfState = (ofState) => {
    return statuses[ofState];
}

export const getIndexOfStatus = (ofStatus) => {
    return statuses.indexOf(ofStatus);
}

export const updateState = (subjectName, taskName, week, state) => {
    const data = getData();
    const subject = data.subjects[subjectName];
    const targetTask = subject.tasks.find(task => task.name === taskName);
    if (targetTask) {
        if (!targetTask.occurances) {
            targetTask.occurances = {};
        }
        targetTask.occurances[week] = state
    }
    localStorage.setItem("data", JSON.stringify(data));
}

export const getTaskStatus = (task, occurance) => {
    // console.log(task)
    if (!task || !task.occurances) return "none";
    if (task.recurring) {
        if (!task.occurances[occurance] || getNameOfState(task.occurances[occurance]) === "none") {
            if (new Date().getTime() > getDatesOfTask(task, occurance - 1).getTime()) {
                return "behind";
            }
            return "none"
        }
        return statuses[task.occurances[occurance]]
    } else if (occurance !== parseInt(task.week)) {
        console.log(occurance, parseInt(task.week), task)
        return "locked";
    } else {
        return "none";
        // return Object.keys(statusStyles)[task.occurances[occurance]]
    }
}

export const getWeekOfTerm = (date) => {
    // an 0 index (week 1 is week 0)
    const week = getISOWeek(date);
    const startWeek = getISOWeek(getStartDate());
    return week - startWeek;
}

export const getDatesOfTask = (task, occurance) => {
    // {name, hour, minute, ampm, recurring, selectedDays: [], occurances: {}, week?, duration?}
    // TODO: This only works for the first day selected of the task e.g. if its [Monday, Friday] is works o
    // off the monday value, some work needs to be done to fix this. Also It's an ugly function
    const startOfTerm = getStartDate();

    const year = new Date(startOfTerm.getFullYear(), 0, 1);
    const week = getISOWeek(startOfTerm) + occurance;
    const timeOfDay = (parseInt(task.hour) % 12 + (task.ampm === 'PM' ? 12 : 0)) * 60 * 60 * 1000 + parseInt(task.minute) * 60 * 1000;
    // console.log(task.selectedDays[0], dayOfWeekToIndex(task.selectedDays[0]))
    const dayOffset = ((week - 1) * 7 + dayOfWeekToIndex(task.selectedDays[0]) - 1) * 24 * 60 * 60 * 1000;
    const resultDate = new Date(year.getTime() + dayOffset + timeOfDay);

    return resultDate;
}

// Progress Bar
export const getFractionOfCompletedTasksToDate = (date) => {
    let completed = 0;
    let total = 0;

    const subjects = getSubjects();
    for (const subjectName of Object.keys(subjects)) {
        const tasks = getTasks(subjectName);
        for (const task of tasks) {
            for (let week = 0; week <= getWeekOfTerm(date); week++) {
                if (getDatesOfTask(task, week) < date) {
                    // TODO: extract this into its own func
                    const status = getTaskStatus(task, week);
                    total++;
                    if (status) {
                        if (status === 'na' || status === "locked") total--;
                        if (status === "done") completed++;
                    }
                }
            }
        }

    }
    return total ? completed / total : 0;
}