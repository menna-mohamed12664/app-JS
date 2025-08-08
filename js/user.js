let links = document.getElementById("links")
let userData = document.getElementById("user_info")
let user = document.getElementById("user")

if(localStorage.getItem("userName")){
    links.remove()
    userData.style.display="flex"
    userData.style.letterSpacing = "2px"
    user.innerHTML = localStorage.getItem("userName")
    user.style.textTransform = "capitalize";

}
let logOut = document.getElementById("logOut").onclick = ()=>{
    localStorage.clear()
    window.location = "regiser.html"
}