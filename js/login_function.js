// JavaScript Document for login
document.getElementById("login_form").addEventListener("submit", loginPage);

function loginPage(evt) {
	if (document.getElementById("uname").value === "" || document.getElementById("psw").value === "") {
		alert("UserName and password required");
		return event.preventDefault();
	} else {
		document.location.href= "home.html";
		return true;
	}
}
