const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    //classList의 내장 속성 toggle로 구현가능 
    h1.classList.toggle("active");
    
}

/*function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}*/


h1.addEventListener("click", handleTitleClick);
//h1.addEventListener("mouseenter", handleMouseEnter);
//h1.addEventListener("resize", handleWindowResize);