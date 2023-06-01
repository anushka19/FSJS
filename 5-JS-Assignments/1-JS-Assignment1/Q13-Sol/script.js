//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt('Enter your age')
let diff =0
if (age>18)
    console.log("You are old enough to drive");

else if(age == 0){
    console.log("Enter a valid age");
}

else if(age < 18){
    diff = 18 - age
    console.log(`You need to wait for ${diff} number of years to drive.`);
}
