enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

let todayDate = document.getElementById('p--today-date')
let today:Date=new Date()
todayDate.innerHTML=`Today is ${days[today.getDay()]} ${months[today.getMonth()]}, ${today.getFullYear()}`