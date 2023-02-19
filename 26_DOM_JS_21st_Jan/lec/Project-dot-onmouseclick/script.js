//we are creating buttons and divs here only..not in HTML

let b = document.querySelector("body")
b.addEventListener("click", (e) =>{
    let para = document.createElement("p");
    para.className = "circle2"
    let leftpx = e.clientX;
    let rightpx = e.clientY;
    para.style.left = leftpx + "px"
    para.style.top = rightpx + "px";
    b.appendChild(para)
    para.innerText = ""
    para.style.color ="red"
})