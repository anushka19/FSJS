//Barbarian
let barbarian = document.querySelector(".clash-card__unit-stats--barbarian")
barbarian.style.backgroundColor = "#EC9B3B"

// let smalltext = document.querySelector(".one-third .stat-value")
// smalltext.style.color = "#ffffff"

let values = document.querySelectorAll(".clash-card__unit-stats .one-third")
for(i=0; i < values.length;i++){
    values[i].style.color = "#ffffff"
}

//values[0].style.color = "#ffffff"

//Archer
let archname =  document.querySelectorAll(".archer div")
archname[2].innerText = "Archer"

let archer = document.querySelector(".clash-card__unit-stats--archer")
archer.style.backgroundColor = "#EE5487"

//Gaint
let gaint = document.querySelector(".clash-card__unit-stats--giant")
gaint.style.backgroundColor = "#F6901A"

//Goblin
let goblinName = document.querySelectorAll(".goblin div")
goblinName[2].innerText = "Goblin"

let goblinColor = document.querySelector(".clash-card__unit-stats--goblin")
goblinColor.style.backgroundColor = "#82BB30"

//Wizard
let wizardColor = document.querySelector(".clash-card__unit-stats--wizard")
wizardColor.style.backgroundColor = "#4FACFF"