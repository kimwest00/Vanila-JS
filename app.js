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
    console.log(username);
    greeting.innerText = "Hello" + username;
    greeting.classList.remove("hidden");
}
function handleLink(event){
    alert("prevent page until click OK");
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLink);

document.getElement