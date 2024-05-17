export const daysBetween = (date1, date2) => {
    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

export const parseDate = (dateString) => {
    // parse dates in dd/mm/yy format
    if (!dateString) {
        return new Date();
    }
    const parts = dateString.split('/');
    let day, month, year;
    if (parts.length === 3) {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10) - 1; // Months are zero-based
        year = 2000 + parseInt(parts[2], 10);
    } else {
        throw new Error('Unsupported date format');
    }
    return new Date(year, month, day);
}

export const getISOWeek = (date) => {
    const dt = new Date(date);
    dt.setHours(0, 0, 0, 0);
    dt.setDate(dt.getDate() + 4 - (dt.getDay() || 7));
    const yearStart = new Date(dt.getFullYear(), 0, 1);
    return Math.ceil(((dt - yearStart) / 86400000 + 1) / 7);
}

export const dayOfWeekToIndex = (dayOfWeek) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const index = days.indexOf(dayOfWeek);
    return index;
}

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function roundToDecimals(number, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
}