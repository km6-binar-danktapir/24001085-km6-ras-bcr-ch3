/**
 * get timestamp from date and time
 */
export function getTimeStamp(date, time) {
    const dateParts = date.split("-");
    const timeParts = time.split(":");
    const timestamp = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1] - 1),
        parseInt(dateParts[2]),
        parseInt(timeParts[0]),
        parseInt(timeParts[1])
    );
    return timestamp;
}
