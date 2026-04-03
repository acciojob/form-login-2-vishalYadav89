//your JS code here. If required.
let form = document.getElementById("myForm");
form.addEventListener("submit"  , function(e){
	e.preventDefault();

	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let number = document.getElementById("pnumber").value;
	let mail  = document.getElementById("mail").value;

	let message = "First Name:" + fname + " " +"Last Name:" +lname +" "+"Phone Number:"+number +" "+"Email ID:"+mail +" "
	alert(message);
});