// user's firstname
var firstName = prompt("Please enter your first name", "");

// user's lastname
var lastName = prompt("Please enter your last name (without spaces)", "");

// user-s favourite colour
var favColour = prompt("What's your favourite colour?", "");

// simple password generator
var pwd = firstName + lastName + favColour + "20";

// print password
document.writeln("Your new password is: " + pwd);
