//small screen navigation bar
function navBarMinimize() {
    var x = document.getElementById("navTop");
    if (x.className === "nav-top") {
      x.className += " responsive";
    } else {
      x.className = "nav-top";
    }
}


//Creating login and signup functions with user information stored
//popup modal
var popup = document.getElementById("popUp");
var popupMsg = document.getElementById("popupMsg");
var popupMsgHead = document.getElementById("popupMsgHead");
var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    popup.style.display = "none";
}
//when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
}
//storing user's info
var objUser = [
    {
        username: "Andrea",
        password: "12345678"
    },
    {
        username: "omgg123",
        password: "rando1234"
    }
]
//login function
function logInSubmit(){
    //get the input from user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("logInErrorMsg");
    
    //loop through User object to confirm if details matches
    for (var i =0; i< objUser.length ; i++){
        console.log(objUser[i]);
        if ( username == objUser[i].username && password == objUser[i].password){
            errorMsg.style.display = "none";
            //pop up message
            console.log(username + " has logged in");
            popupMsgHead.innerHTML = ("Welcome "+ username +"!");
            popupMsg.innerHTML = "You have succesfully logged in!";
            popup.style.display = "block";
            //resets the form
            document.getElementById("logInForm").reset();
            return false;
        }
        else if (username == "" || password == "") {
            errorMsg.style.display = "block";
            errorMsg.innerHTML = "Please fill in the required fields!"
            return false;
        }
    }
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Wrong username and/or password!!"
    event.preventDefault();
    return false;
}
//signup function
function signUpSubmit(){
    var regUser = document.getElementById("newUsername").value;
    var regEmail = document.getElementById("email");
    var regPassword = document.getElementById("newPassword").value;
    var regCfmPassword = document.getElementById("newCfmPassword").value;
    var errorMsg = document.getElementById("signUpErrorMsg");
    var newUser = {
        username: regUser,
        password: regPassword
    }
    
    //sign up validation checks
    if (regUser == "" || regPassword == "" ) {
        errorMsg.innerHTML = "Please fill in the required fields!"
        errorMsg.style.display = "block";
        return false;
    }
    else if ( regPassword.length < 8){
        errorMsg.innerHTML = "Password must be 8 characters long!"
        errorMsg.style.display = "block";
        return false;
    }
    else if (regCfmPassword != regPassword){
        errorMsg.innerHTML = "Please double check your password!"
        errorMsg.style.display = "block";
        return false;
    }
    //loop to check if username has been taken
    for (var i =0; i< objUser.length ; i++){
        if (regUser == objUser[i].username){
            errorMsg.innerHTML = "Username has been taken!"
            errorMsg.style.display = "block"; 
            return false;
        }
    }
    //if correct adds the register user into array
    objUser.push(newUser);
    console.log(objUser);
    //if correct hides error msg
    errorMsg.style.display = "none";
    //pop up message
    console.log(regUser + " has sign up!");
    popupMsgHead.innerHTML = ("Welcome "+ regUser +"!");
    popupMsg.innerHTML = "Thank you for signing up!";
    popup.style.display = "block";
    event.preventDefault();
    //resets the form
    document.getElementById("signUpForm").reset();
    return false;
    
}
//switch log in and sign in panels
function logSignToggle() {
    event.preventDefault();
    var signUp = document.getElementById("signUpForm");
    var logIn = document.getElementById("logInForm");
    var logInBtn = document.getElementById("logInBtn");
    var signUpBtn = document.getElementById("signUpBtn");

    if (signUp.style.display === "none") {
        signUp.style.display = "block";
        logIn.style.display = "none";
        signUpBtn.className += " selected";
        logInBtn.className -= " selected";
    } 
    else {
        signUp.style.display = "none";
        logIn.style.display = "block";
        logInBtn.className += " selected";
        signUpBtn.className -= " selected";
    }
}
//check out submit
function checkoutSubmit(){
    popupMsgHead.innerHTML = ("Transaction Succesful");
    popupMsg.innerHTML = "Thank you for buying! Pleace come again";
    popup.style.display = "block";
}
//validate contact form
function validateContactForm(){

    var cName = document.getElementById("contactName").value;
    var cEmail = document.getElementById("contactEmail").value;
    var cMessage = document.getElementById("contactMsg").value;
    var errorMsg = document.getElementById("conUsErrorMsg");
    if (cName == "" || cEmail == "" || cMessage == "") {
        errorMsg.innerHTML = "Please fill in the required fields!"
        errorMsg.style.display = "block";
        return false;
    }
    else if(cEmail.indexOf("@") == -1 || cEmail.length < 6){
        errorMsg.innerHTML = "Please enter a valid Email!";
        errorMsg.style.display = "block";
        return false;
    }
    //if correct hides error msg
    errorMsg.style.display = "none";
    //pop up message
    console.log(cName + " has sent the following message: " + cMessage);
    popupMsg.innerHTML = ("Thank you for sending a message " + cName +"!");
    popup.style.display = "block";

    //resets the form
    event.preventDefault();
    document.getElementById("contactUsForm").reset();
}

//Creating increment and decrement for quantity of product
function addQty(){
    //get value from quantity
    var num = parseInt(document.getElementById("quantityNum").value) 
    //input value increment by 1
    num++;
    //sets the quantity number
    document.getElementById("quantityNum").value = num;
}
function minusQty(){
    //get value from quantity
    var num = parseInt(document.getElementById("quantityNum").value) 
    //input value decrement by 1 if num larger than 1
    if (num >1) {
        num--;
    }
    //sets the quantity number
    document.getElementById("quantityNum").value = num;
}