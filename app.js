﻿//loginForm에서 결과값을(반환값을)받아온다
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
function onLoginBtnClick(){
    //loginInput창을 통해 입력한 값이 어떻게 저장되는지 보기위한 코드라인
    console.dir(loginInput);
    console.log("click");
}
loginButton.addEventListener("click",onLoginBtnClick);
