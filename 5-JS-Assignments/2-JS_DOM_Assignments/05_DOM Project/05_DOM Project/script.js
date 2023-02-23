//Change text color to purple
let textColor = document.querySelectorAll(".recipe-gallery .card .recipe-text")
for(i=0; i < textColor.length;i++){
    textColor[i].style.color = "#551AA0"
}

//creat card
let recipe = document.querySelector(".recipe-gallery")
let card = document.createElement("div")
card.className = "card"
recipe.appendChild(card)

//style card
card.innerText = "add 6th card here"
card.style.fontSize = "25px";
card.style.fontWeight = "bold"
//textColor[0].style.color = "#551AA0"

//Add button
let divselect = document.querySelectorAll(".nav-center div")[2]

let link = document.createElement("a")
link.innerText = "Pro Subscription"
link.className = "btn"

divselect.appendChild(link)

//console.log(divselect);