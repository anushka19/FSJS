// step1: target the button
const btn = document.getElementById('button');

//step 2:generating the random color
const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for(let i=0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
//btn.addEventListener("click", colorChanger);

//step 3: to check on console.log
console.log(randomColor())
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);