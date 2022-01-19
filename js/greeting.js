//loginForm에서 결과값을(반환값을)받아온다
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
//반복되는 변수는 오타의 위험성이 있으므로, 변수로만들어준다
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();//기본동작인 브라우저 새로고침을 막고있다\
    console.log(event)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;//onLoginSubmit 함수에 대한 인자로 값을 전달받고있다
    localStorage.setItem("username",username);
    paintGreetings(username);
    
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;//`(백틱)를 이용한 띄어쓰기 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //아직 입력되지않았기때문에 form을 보여주자
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //입력되었기때문에 greetings(h1)을 보여주자
    paintGreetings(savedUsername);
}

link.addEventListener("click",handleLink);
function handleLink(event){
    alert("prevent page until click OK");
}