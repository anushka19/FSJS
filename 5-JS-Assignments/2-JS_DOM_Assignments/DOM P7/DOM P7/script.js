let lang = document.querySelectorAll(".main__languages a")
let main = document.querySelector(".main__languages")
let val = []
for(i = 0; i < lang.length;i++){

   if(lang[i].innerText.includes("2.0")){
        
        main.removeChild(lang[i])
        
   }
   
}

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
let change = btn2.addEventListener("click", c = (e) => {
   
   for(i = 0; i < lang.length;i++){     
      if(lang[i].innerText.includes("2.0")){
        
         course.appendChild(lang[i])
         
    }
         
     e.preventDefault()   
    
   }
   //return lang
})

btn2.onclick = c
btn2.onclick = change


