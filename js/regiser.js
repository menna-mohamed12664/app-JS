let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(userName.value === "" || email.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("userName" , userName.value.trim().toLowerCase())
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(()=>{
           window.location = "login.html"
        } , 1500)
    }
})
let show = document.getElementById("show")
show.addEventListener("click",()=>{
 show.checked ?  password.type = "text" : password.type = "password";
})    




















