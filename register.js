let rgbtn=document.querySelector(".rgbtn");

rgbtn.addEventListener("click",(e)=>
    {
e.preventDefault();

let fullName = document.querySelector(".name").value.trim();
let email = document.querySelector(".email").value.trim();
let password = document.querySelector(".password").value.trim();
let userName = document.querySelector(".userName").value.trim();

if(!fullName || !email || !password || !userName)
{
    alert("please enter all details");
    return;
}

let users=JSON.parse(localStorage.getItem(`user${userName}`)) || [];

let allKeys=Object.keys(localStorage);
let existingUserName=allKeys.some((key)=>key===`user${userName}`)
if(existingUserName){
    alert("userName is already exist");
    return;
}

let emailExist=false;
for(let key of allKeys){
    if(key.startsWith("user")){
        let data=JSON.parse(localStorage.getItem(key))
if(data.email===email){
  emailExist=true;
  break;
      }
    }    
}
if(emailExist){
    alert("email is already registered");
    return;
}

let newUser={
        name:fullName,
        email:email,
        pass:password,
        user:userName
    }

   

    localStorage.setItem(`user${userName}`,JSON.stringify(newUser))

document.querySelector(".name").value = "";
document.querySelector(".email").value = "";
document.querySelector(".password").value = "";


alert("registered succesfully");



window.location.href="login.html"



})



