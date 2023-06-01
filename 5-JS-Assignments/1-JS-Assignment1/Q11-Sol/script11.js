// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date1 = new Date()

console.log(date1.getFullYear());
console.log(date1.getMonth()+1);
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.valueOf()/1000); // seconds elapsed since 1 Jan 1970


