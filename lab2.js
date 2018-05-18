var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
let todayDate = document.getElementById('p--today-date');
let today = new Date();
todayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
document.getElementById('button--birthday').addEventListener('click', function (e) {
    let birthDate = document.getElementById('input--date-picker');
    if (birthDate.value) {
        let bDate = parseDate(birthDate.value);
        document.getElementById('p--birthday-message').innerHTML = getBirthDayMessage(bDate);
    }
});
function getBirthDayMessage(birthDate) {
    let today = new Date();
    if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
        return 'Happy birthday!';
    }
    let nextBirthDate = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthDate < today) {
        nextBirthDate = new Date(today.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
    }
    return `Your birthday will be on ${days[nextBirthDate.getDay()]} ${months[nextBirthDate.getMonth()]} ${nextBirthDate.getDate()}, ${nextBirthDate.getFullYear()}`;
}
function parseDate(str) {
    const mdy = str.split('-');
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
}
