//loginForm에서 결과값을(반환값을)받아온다
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
function onLoginSubmit(event){
    event.preventDefault();//기본동작인 브라우저 새로고침을 막고있다
    const username = loginInput.value;//onLoginSubmit 함수에 대한 인자로 값을 전달받고있다
    loginForm.classList.add("hidden");
    localStorage.setItem("username",username);
    greeting.innerText = `Hello ${username}`;//`(백틱)를 이용한 띄어쓰기 추가
    greeting.classList.remove("hidden");
}
function handleLink(event){
    alert("prevent page until click OK");
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLink);
const savedUsername = localStorage.getItem("username");
if(savedUsername === null){
    //아직 입력되지않았기때문에 form을 보여주자
    
}else{
    //입력되었기때문에 greetings(h1)을 보여주자
}