function checkPassword() {
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log(passwordEntered);
    var sitePassword = "codewizclub";
    if (passwordEntered == sitePassword) {
        console.log("Allow");
        window.location.assign("members.html");
    } else {
        console.log("block");
        document.getElementById("incorrect password").style.color = "red";
        var paraElem = document.getElementById("incorrect password").innerHTML = "Incorrect Password. Please try again...";
    }
}