export const getToken = () => {
    return localStorage.getItem('token')
}
export const setToken = (token: string) => {
    return localStorage.setItem('token', token)
}


function numberWithSpaces(x: string) {
    var parts = x.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

export const prettifyAmount = (amount: number) => numberWithSpaces((amount / 100).toFixed(2))

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date: Date | string) {
    const perfDate = new Date(date)
    return [
        perfDate.getFullYear(),
        padTo2Digits(perfDate.getMonth() + 1),
        padTo2Digits(perfDate.getDate()),
    ].join('-');
}
export function formatTime(date: Date | string) {
    const perfDate = new Date(date)
    return [
        perfDate.getTime(),
    ].join('-');
}

export function formatDateForDownload(date: Date | string,) {
    const perfDate = new Date(date)
    return [
        perfDate.getFullYear(),
        padTo2Digits(perfDate.getMonth() + 1),
        padTo2Digits(perfDate.getDate()),
    ].join('');
}
