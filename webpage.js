

window.addEventListener("DOMContentLoaded",()=>{

let userName=document.querySelector(".userName");
let logInUser=localStorage.getItem("logInUser")

userName.innerText=logInUser;

})
let sidebar=document.querySelector(".sidebar");
let logOut=document.getElementById("logOut");

let menu=document.querySelector(".menu").addEventListener("click",()=>{
    sidebar.classList.toggle("active")
})
let removebtn=document.querySelector(".removebtn");
removebtn.addEventListener("click",()=>{
    sidebar.classList.remove("active")
})

logOut.addEventListener("click",(e)=>{
    e.preventDefault();
    if(confirm("are you sure to get logout")){
 localStorage.removeItem("logInUser");
 alert("succesfully logOut")
    }
   
    window.location.href="login.html";

})
