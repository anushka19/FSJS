//Task 1 - title color to red
// let title = document.querySelector("h1")
// title.style.color = "#DC143C"

//add to cart icon
// let image = document.querySelector(".add-to-cart img")
// image.src = "./images/icon-cart.svg"

//Task 2 - button color change to red
let btn = document.querySelector(".add-to-cart")
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#DC143C"
})
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#3C8067"
})

//btn.style.backgroundColor = "#DC143C"

//add to cart icon
let image = document.querySelector(".add-to-cart img")
image.src = "./images/icon-cart.svg"