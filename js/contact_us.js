// JavaScript Document
document.getElementById("contact_form").addEventListener("submit", contactUsPage);

function contactUsPage(evt) {
	
	if (document.getElementById("contact-name").value === "" || document.getElementById("contact-email").value === "" || document.getElementById("contact-message").value === "" || document.getElementById("contact-phone").value === ""){
		alert("Please provide all required information");
		return event.preventDefault();
	} else {
		alert(" you for your message....we will get back to you soon!!");
		document.getElementById("contact-name").value = "";
		document.getElementById("contact-email").value = "";
		document.getElementById("contact-message").value = ""; 
		document.getElementById("contact-phone").value = "";
		return event.preventDefault();
	}
}


