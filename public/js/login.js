function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var footer = document.getElementById("footer");

    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        document.getElementById("username_signup").value="";
        document.getElementById("email").value="";
        document.getElementById("password_signup").value="";
        document.getElementById("comfirm_password").value="";
        document.getElementById("birthday").value="";
        document.getElementById("gender").value="";
        document.getElementById("phone").value="";
        document.getElementById("address").value="";
    }
}