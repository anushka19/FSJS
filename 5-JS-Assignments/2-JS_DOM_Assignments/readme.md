# JavaScript DOM Assignment 2

## JavaSCript DOM Projects

<br>

### <b>Project 1:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and add "Hire Me" in the navbar</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Outputs/task1Output.png)

<br>

##### <b> Solution: </b>

```
//Task1
//Changing last element text
let ul1 = document.querySelectorAll("ul")[0]
let last = ul1.lastElementChild
last.innerText = "Projects"

//Creating new li
let new1 = document.createElement("li");
new1.innerText = "Hire Me"
let list1 = document.querySelectorAll("ul")[0]
list1.appendChild(new1)
```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and changing the placeholder.</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Outputs/task2Output.png)

<br>

##### <b> Solution: </b>

```
//Task 2
//Changing last element text in nav
let ul1 = document.querySelectorAll("ul")[0]
let last = ul1.lastElementChild
last.innerText = "Projects"

//Changing placeholder of search field
let search = document.querySelector("div input")
search.setAttribute('placeholder','Search My Project')
```

<br>

#### <b> Task 3 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and changing the paragraph by adding "ineuron"</p>

<br>

#### <b>After Update:</b>

<br>

![Task3](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Outputs/task3Output.png)

<br>

##### <b> Solution: </b>

```
//Task 3
let text1 = document.querySelectorAll("section div p span")
text1[2].innerText = "iNeuron Intelligence Pvt Ltd"
```

<br>

#### <b> Task 4 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and changing image</p>

<br>

#### <b>After Update:</b>

<br>

![Task4](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Outputs/task4Output.png)

<br>

##### <b> Solution: </b>

```
//Task 4
let image = document.querySelector(".hero-right-section img")
image.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

```

<br>

#### <b> Task 5 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and adding "Support Me" button in the bottom</p>

<br>

#### <b>After Update:</b>

<br>

![Task5](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Outputs/task5Output.png)

<br>

##### <b> Solution: </b>

```
//Task 5
let d = document.querySelector(".hero-right-section-btns")
let btn =  document.createElement("button")
btn.innerText = "Support Me"
d.append(btn)
```

<br>

### <b>Project 2:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to change "Contacts" to "Projects"</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Outputs/task1Output.png)

<br>

##### <b> Solution: </b>

```
//Task 1
let nav = document.querySelectorAll("ul li")
nav[2].innerText ="Projects"
```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to change "Contacts" to "Projects" and add "Skills" in the dropdown along with a small description.</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Outputs/task2Output.png)

<br>

##### <b> Solution: </b>

```
//Task 2
let nav = document.querySelectorAll("ul li")
nav[2].innerText ="Projects"

//Adding Skills in dropdown
let drop = document.querySelector(".accordian-wrapper")
let div1 = document.createElement("div")
//console.log(drop);


let heading1 = document.createElement("h3")
heading1.innerText = "Skills"
let para = document.createElement("p")
para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."


div1.className = "accordian"
drop.appendChild(div1)

div1.appendChild(heading1)
div1.appendChild(para)
console.log(div1);
```

<br>

### <b>Project 3:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to add placeholder for input and output board</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./1-2-3-DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

<br>

##### <b> Solution: </b>

```
//Output Board
let n = document.querySelector(".enterName")
n.placeholder = "FSJS 2.0"

let email = document.querySelector(".enterMail")
email.placeholder = "fsjs@ineuron.ai"

let message1 = document.querySelector(".enterMessage")
message1.placeholder = "Hello World";

//Input Board
let inp = document.querySelector(".mainRight form")
inp[0].placeholder = "FSJS 2.0"
inp[1].placeholder = "fsjs@ineuron.ai"
inp[2].placeholder = "Hello World"

```

<br>

### <b>Project 4:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to add color in the card, change texts and make font color white.</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

<br>

##### <b> Solution: </b>

```
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

```

<br>

### <b>Project 5:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to change the reciepe color, add card to it and add a "Pro Subscription" button in the top.</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

<br>

##### <b> Solution: </b>

```
//Change text color to purple
let textColor = document.querySelectorAll(".recipe-gallery .card .recipe-text")
for(i=0; i < textColor.length;i++){
    textColor[i].style.color = "#551AA0"
}

//create card
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

```

<br>

### <b>Project 6:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to add iNeuron logo.</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

<br>

##### <b> Solution: </b>

```
//Adding ineuron logo
let logoNew = document.querySelector(".logo")
logoNew.src = "./assets/ineuron-logo.png"

```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to change the price value and a linkedin social media icon in the footer.</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

<br>

##### <b> Solution: </b>

```
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

```

<br>

### <b>Project 7:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to remove from courses offered which has "2.0" in it.</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./DOM%20P7/DOM%20P7/ass7.1-after.png)

<br>

##### <b> Solution: </b>

```
//Task1
let lang = document.querySelectorAll(".main__languages a")
let main = document.querySelector(".main__languages")
let val = []
for(i = 0; i < lang.length;i++){

   if(lang[i].innerText.includes("2.0")){

        main.removeChild(lang[i])

   }

}

```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to write something in the input and sublit the form.</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./DOM%20P7/DOM%20P7/ass7.2-after.png)

<br>

##### <b> Solution: </b>

```
//Task 2
let text = document.querySelector(".main__form-input")
text.setAttribute("placeholder","iNeuron")

//let btn = document.querySelector(".main__form-btn")
let btn2 = document.getElementsByClassName("main__form-btn")
btn2[0].disabled = false
console.log(btn2)

//reload and get 2.0s
//let submit =
let course = document.querySelector(".main__languages")
let change = btn2.addEventListener("click", c = () => {

   for(i = 0; i < lang.length;i++){
      if(lang[i].innerText.includes("2.0")){

         course.appendChild(lang[i])

    }



   }
   //return lang
})

btn2.onclick = c
btn2.onclick = change
```

<br>

### <b>Project 8:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to add scroll in the sidebar highlighted.</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./DOM%20P8/DOM%20P8/ass8.1-after.png)

<br>

##### <b> Solution: </b>

```
//Task1
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
```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to make the background plain white.</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./DOM%20P8/DOM%20P8/ass8.2-after.png)

<br>

##### <b> Solution: </b>

```
//Task 2
document.body.style.backgroundImage = "none"
```

<br>

#### <b> Task 3 </b>

<br>

<p>The user has to add toggle for the navbar for small screen.</p>

<br>

#### <b>After Update:</b>

<br>

![Task3](./DOM%20P8/DOM%20P8/ass8.3-after.png)

<br>

##### <b> Solution: </b>

```
//Task 3
let nav = document.querySelector(".navbar-toggler")
nav.addEventListener("click", () => {
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse")
})

console.log(document.querySelector("#navbarTogglerDemo01").classList)
```

<br>

### <b>Project 9:</b>

<br>

#### <b> Task 1 </b>

<br>

<p>The user has to add change the color of the text and cart icon of button</p>

<br>

#### <b>After Update:</b>

<br>

![Task1](./DOM%20P9/DOM%20P9/ass9.1-after.png)

<br>

##### <b> Solution: </b>

```
//Task 1 - title color to red
let title = document.querySelector("h1")
title.style.color = "#DC143C"

//add to cart icon
let image = document.querySelector(".add-to-cart img")
image.src = "./images/icon-cart.svg"
```

<br>

#### <b> Task 2 </b>

<br>

<p>The user has to add change the color of button on mouse hover and cart icon of the button</p>

<br>

#### <b>After Update:</b>

<br>

![Task2](./DOM%20P9/DOM%20P9/ass9.2-after.png)

<br>

##### <b> Solution: </b>

```
//Task 2 - button color change to red
let btn = document.querySelector(".add-to-cart")
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#DC143C"
})
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#3C8067"

})

//add to cart icon
let image = document.querySelector(".add-to-cart img")
image.src = "./images/icon-cart.svg"
```
