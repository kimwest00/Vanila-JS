const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("resize", handleWindowResize);