
let logInBtn=document.querySelector(".login");

logInBtn.addEventListener("click",(e)=>{
e.preventDefault();


let emailId=document.querySelector(".email").value.trim();
let passwordLog=document.querySelector(".pass").value.trim();


if(!emailId || !passwordLog){
    alert("please fill all details")
}

    
    let allKeys=Object.keys(localStorage);
    let logIn=false;
    let keyData=null;


for(let key of allKeys){
    if(key.startsWith("user")){
        let tempData=JSON.parse(localStorage.getItem(key));
        if((tempData.user===emailId || tempData.email===emailId) && tempData.pass===passwordLog){
logIn=true;
keyData=tempData;
break;
        }

    }
}

if(logIn){
    alert("log In succesfully");
     localStorage.setItem("logInUser",keyData.user);
    window.location.href="webpage.html";
   


}else{
    alert("wrong password or email");
}






})


