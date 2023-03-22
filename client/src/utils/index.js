export const convertToReadableDate = (unix_timestamp) =>{
    return new Date(unix_timestamp * 1000).toLocaleDateString("en-GB");
}

export const convertToUnixTimestamp = (date) =>{
    return Math.floor(date.getTime() / 1000);
}