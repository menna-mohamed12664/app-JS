let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")
let getUserName = localStorage.getItem('userName')
let getPassword = localStorage.getItem('password')
let show = document.getElementById("show")


loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(userName.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        if(getUserName === userName.value.trim().toLowerCase() && getPassword === password.value){
            setTimeout(()=>{
               window.location = "index.html"
            }, 1000)
        }else{
            alert("the data is wrong!")
        }
    }   
})  

show.addEventListener("click",()=>{
 show.checked ?  password.type = "text" : password.type = "password";
}) 