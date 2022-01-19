const h1 = document.querySelector("body h1")
const superEventHandler = {
    handleTitleClick: function handleTitleClick(){
    //classList의 내장 속성 toggle로 구현가능 
    h1.classList.toggle("active");
    
}
,
handleMouseEnter: function handleMouseEnter(){
    h1.innerText = "Mouse is here";
},
window: function resize(){
    h1.innerText = "resizing now!";
}
}
/*function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}*/


h1.addEventListener("click", superEventHandler.handleTitleClick);
h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
window.addEventListener("resize", superEventHandler.window);