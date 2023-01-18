function Payment()
{
    var name=document.getElementById("naav").value;
    let card=document.getElementById("card").value;
    let exp=document.getElementById("exp").value;
    let cvv=document.getElementById("cvv").value;

    if(card==1234 && exp==2022 && cvv==123)
    {
        alert("Payment Successful");
        window.location.href("home.html");
    }
    else
    {
        document.getElementById("naav").style.borderColor="red";
        document.getElementById("card").style.borderColor="red";
        document.getElementById("exp").style.borderColor="red";
        document.getElementById("cvv").style.borderColor="red";
    }
}