function login()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;

    if(user=="Rajkumar@123" && pass=="rajkumar@123")
    {
        document.getElementById("user").style.borderColor="green";
        document.getElementById("pass").style.borderColor="green";
        window.location.href("Course.html");
    }
    else
    {
        document.getElementById("user").style.borderColor="red";
        document.getElementById("u").innerHTML="Username cannot be blank";

        document.getElementById("pass").style.borderColor="red";
        document.getElementById("pk").innerHTML="Password cannot be blank";
    }
}