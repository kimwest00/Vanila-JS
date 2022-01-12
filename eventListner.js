const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
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