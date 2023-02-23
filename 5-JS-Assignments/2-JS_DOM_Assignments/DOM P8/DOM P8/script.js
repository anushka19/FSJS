let aside = document.querySelector(".new")
//console.log(aside)
let line = document.createElement("hr")
aside.appendChild(line)
line.className = "hr-line"
let head = document.createElement("h2")
aside.appendChild(head)
let para = document.createElement("p")
aside.appendChild(para)

head.innerText = "This is my custom heading"
head.className = "new-head"

aside.style.overflow = "scroll"


let a = document.getElementsByClassName("new")
// head.style.overflow = "true"
// head.style.overflowX = "true"
// head.style.overflowY = "true"

//console.log(a)

//Task 2
document.body.style.backgroundImage = "none"

//Task 3
let nav = document.querySelector(".navbar-toggler")
nav.addEventListener("click", () => {
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse")
})

console.log(document.querySelector("#navbarTogglerDemo01").classList)