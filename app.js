//loginForm에서 결과값을(반환값을)받아온다
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
function onLoginSubmit(event){
    event.preventDefault();//기본동작인 브라우저 새로고침을 막고있다
    console.log(loginInput.value);//onLoginSubmit 함수에 대한 인자로 값을 전달받고있다
}
function handleLink(event){
    alert("prevent page until click OK")
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLink);

document.getElement