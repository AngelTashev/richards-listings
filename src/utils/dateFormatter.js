export const formatDate = (date) => {

    const dateDate = date.getDate();

    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${getNum(dateDate)}/${getNum(month)}/${year} ${getNum(hour)}:${getNum(minutes)}`;
}

const getNum = (num) => {
    return num < 10 ? `0${num}` : num;
}