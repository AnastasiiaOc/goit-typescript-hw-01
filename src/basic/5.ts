
// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day:string):boolean => {

    if (day === 'Saturday' || day === 'Sunday'){
        return(true)
    }
    else {
        return (false)
    }
    }
