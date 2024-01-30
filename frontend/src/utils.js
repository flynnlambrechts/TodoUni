export const daysBetween = (date1, date2) => {
    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

export const parseDate = (dateString) => {
    // parse dates in dd/mm/yy format
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