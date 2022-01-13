//loginForm에서 결과값을(반환값을)받아온다
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
function onLoginSubmit(inform){
    inform.preventDefault();
    console.log(inform);
}
loginForm.addEventListener("submit",onLoginSubmit);
document.getElement