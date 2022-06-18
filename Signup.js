var formtag=document.querySelector("form");
formtag.addEventListener("submit",myfunc)
var userdata=JSON.parse(localStorage.getItem("userdetails"))||[];

function myfunc()
{
    event.preventDefault();
    var obj={
        FirstName:document.querySelector("#firstname").value,
        LastName:document.querySelector("#lastname").value,
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value
    }
    console.log(obj)
    // console.log(userdata);
    if(checkemail(obj.Email)==true)
    {
        userdata.push(obj);
        localStorage.setItem("userdetails",JSON.stringify(userdata));
        alert("New Account Created");
        window.location.href="Login.html"
    }
    else
    {
         alert("Account Already Exists");
    }
}
function checkemail(email)
{
    var filter= userdata.filter(function(elem){
        return elem.Email==email;
     });
     if(filter.length>0)
     {
        return false;
     }
     else
     {
        return true;
     }
}
