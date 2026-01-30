exports.getDateTime = function () {
    const now = new Date();

    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const dayName = days[now.getDay()];

    const day = now.getDate();
    const month = now.getMonth() + 1; // months start from 0
    const year = now.getFullYear();

    const time = now.toLocaleTimeString();

    return dayName + " " + day + "/" + month + "/" + year + ", " + time;
};
