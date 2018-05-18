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
todayDate.innerHTML=`Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`

document.getElementById('button--birthday').addEventListener('click',function (e) {
    let birthDate = document.getElementById('input--date-picker')as HTMLInputElement
    if(birthDate.value){
        let bDate:Date = parseDate(birthDate.value)
        document.getElementById('p--birthday-message').innerHTML=getBirthDayMessage(bDate)
    }
})

function getBirthDayMessage(birthDate:Date):string{
    let today:Date = new Date()
    if(today.getMonth()===birthDate.getMonth()&&today.getDate()===birthDate.getDate()){
        return 'Happy birthday!'
    }
    let nextBirthDate:Date = new Date(today.getFullYear(),birthDate.getMonth(),birthDate.getDate())
    if(nextBirthDate<today){
        nextBirthDate = new Date(today.getFullYear()+1,birthDate.getMonth(),birthDate.getDate())
    }
    return `Your birthday will be on ${days[nextBirthDate.getDay()]} ${months[nextBirthDate.getMonth()]} ${nextBirthDate.getDate()}, ${nextBirthDate.getFullYear()}`
}

function parseDate(str):Date {
    const mdy = str.split('-');
    return new Date(mdy[0], mdy[1]-1, mdy[2]);
}