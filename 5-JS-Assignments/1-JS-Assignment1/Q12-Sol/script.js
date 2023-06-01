// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date1 = new Date()

const year = date1.getFullYear()
console.log(year);

const month = date1.getMonth()
console.log(month);

const day = date1.getDate()
console.log(day);

const hrs = date1.getHours()
console.log(hrs);

const minus = date1.getMinutes()
console.log(minus);
console.log(`${year}-${month}-${day} ${hrs}:${minus}`)
console.log(`${day}-${month}-${year} ${hrs}:${minus}`)
console.log(`${day}/${month}/${year} ${hrs}:${minus}`)
