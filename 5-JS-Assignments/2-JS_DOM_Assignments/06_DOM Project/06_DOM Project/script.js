//Adding ineuron logo
let logoNew = document.querySelector(".logo")
logoNew.src = "./assets/ineuron-logo.png"

//Price change
let price = document.querySelector(".app_price span")
price.innerText = "$10"

//Social Media Icon
let socials = document.querySelector(".footer_social")
console.log(socials)

let linkedin = document.createElement("div")
linkedin.className = "footer_social_ico"
socials.appendChild(linkedin)

let icon = document.createElement("i")
icon.className = "fa-brands fa-linkedin"
linkedin.appendChild(icon)







