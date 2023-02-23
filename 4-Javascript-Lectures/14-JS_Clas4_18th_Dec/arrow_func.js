// let names = (var1,var2) => {
//     console.log('Hello World', var1,'vs', var2)
// }
// names('France', 'Argentina')

//object - key and value
let userName = {

    firstName: 'anushka',
    lastname: 'Bommakanty',
    role: 'admin',
    loginCount: 25
};
console.log(userName.role);
userName.loginCount = 61;
console.log(userName);

//for in
for(let x in userName){
    console.log(userName[x]); //username.x is undefined 
    console.log(userName.x);
}

