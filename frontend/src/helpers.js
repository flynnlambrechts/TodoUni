
const blankData = {
    subjects: {}
}

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}

export const getStartDate = () => {
    const data = getData();
    if (data) {
        return data["startdate"];
    }
    return undefined;
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
    if (data) {
        return data.subjects;
    }
    return undefined;
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