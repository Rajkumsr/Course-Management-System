function ContactToMe()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var msg=document.getElementById("message").value;

    var n=name;
    var em=email;
    var sub=subject;
    var sms=msg;

    if(name==n && email==em && subject==sub && msg==sms)
    {
        alert("Message is sent");
    }
}