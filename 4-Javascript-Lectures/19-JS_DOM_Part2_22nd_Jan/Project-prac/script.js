const btn = document.getElementById('button');
//1:11:52

//any random color
const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = "#"
    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)]//randomly select the any 0 to 15th value 6 times

    }
    return cons;
}

 console.log(randomColor());

 //
 function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
 }

 btn.addEventListener("click",changeRandomColor)