function validateForm() {
  var firstName = document.forms["form"]["fname"].value;
  var lastName = document.forms["form"]["lname"].value;
  var elMail = document.forms["form"]["email"].value;
  var user = document.forms["form"]["username"].value;
  var pass = document.forms["form"]["pwd"].value;
  if (firstName == "") {
    
	document.getElementById('fname').style.borderColor="red";
  alert("plz enter your fisrt name ");

    var x=0;
  }
  if (lastName == "") {
	document.getElementById('lname').style.borderColor="red";
  if(firstName!=""){
  alert("plz enter your last name ");}
    var x=0;
  }
  
  if (elMail == "") {
	document.getElementById('email').style.borderColor="red";
  if(lastName!=""){
  alert("plz enter your email  ");}
    var x=0;
  }
  if (user == "") {
	document.getElementById('username').style.borderColor="red";
  if(elMail!=""){
  alert("plz enter your username  ");}
    var x=0;
  }
  if (pass == "") {
	document.getElementById('pwd').style.borderColor="red";
  if(user!=""){
  alert("plz enter your password  ");}

    var x=0;
  }
  
  if(x == 0){
    if(firstName==""&&lastName==""&&elMail==""&&user==""&&pass==""){
    alert("fill the required boxes");}
	  return false;
  }
}
function yyy()
{
  var firstName = document.forms["form"]["fname"].value;
  if(firstName!="")
  document.getElementById("lname").disabled = false;
  document.getElementById('fname').style.borderColor="";

}

function ttt()
{
  var lastName = document.forms["form"]["lname"].value;
  if(lastName!="")
  document.getElementById('email').disabled=false;
  document.getElementById('lname').style.borderColor="";

}

function www()
{
  var elMail = document.forms["form"]["email"].value;
  if(elMail!="")
  document.getElementById('username').disabled=false;
  document.getElementById('email').style.borderColor="";

}

function eee()
{
  var user = document.forms["form"]["username"].value;
  if(user!="")
  document.getElementById('pwd').disabled=false;
  document.getElementById('username').style.borderColor="";

}
function sss()
{
  var pass = document.forms["form"]["pwd"].value;
  if(pass!="")
  document.getElementById('pwd').style.borderColor="";

}
function save() {
  var uname="";
var elMail=document.getElementById("email").value;
for(var i=0;elMail[i]!='@'&&i<elMail.length;i++){

  uname=uname+elMail[i];
}
 alert("The application of ["+uname+"] is saved!");
}