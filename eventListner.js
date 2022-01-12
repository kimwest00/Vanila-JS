const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    //"active"자체로 비교하면 에러의 우려가 많다
    //만약 h1에게 className이 있었다면??
    //해당코드를 실행하면 className이 사라진다
    //classList를 사용해보자
    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
    
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