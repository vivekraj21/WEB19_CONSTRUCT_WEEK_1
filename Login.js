var formtag=document.querySelector("form");
formtag.addEventListener("submit",myfunc)
var loginUserData=JSON.parse(localStorage.getItem("userdetails"))||[];

function myfunc(event)
{
    event.preventDefault();
    var obj={
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value
    }
    console.log(obj)
    // console.log(userdata);
    if(verifyemail(obj.Email,obj.Password)==true)
    {
        loginUserData.push(obj);
        localStorage.setItem("loggedUserData",JSON.stringify(loginUserData));
        alert("Login Sucessfully");
        window.location.href="index.html";
    }
    else
    {
         alert("Invalid Email or Password");
    }
}
function verifyemail(email,password)
{
    var filter= loginUserData.filter(function(elem){
        return elem.Email==email && elem.Password==password;
     });
     if(filter.length>0)
     {
        return true;
     }
     else
     {
        return false;
     }
}