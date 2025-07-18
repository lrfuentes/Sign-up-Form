const password = document.querySelector("#user-password");
const confirm_pass = document.querySelector("#confirm-password");
const pass_error = document.querySelector("#error");

function verifyMatch(){
    if (password.value !==  confirm_pass.value) {
        pass_error.textContent = "Passwords don't match";
    }
    else {
        pass_error.textContent = "";
    }
}
password.addEventListener("keyup", ()=>{
    if(confirm_pass.value.length != 0) verifyMatch();
});
confirm_pass.addEventListener("keyup", verifyMatch);