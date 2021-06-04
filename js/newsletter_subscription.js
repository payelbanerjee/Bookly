// JavaScript Document for Newsletter Subscription
document.getElementById("newsletter").addEventListener("submit", subcriptionPage);

function subcriptionPage(evt) {
	
	if (document.getElementById("contact-name").value === "" || document.getElementById("contact-email").value === "") {
		alert("Please provide all required information");
		return event.preventDefault();
	}else{
		alert("Thank you for your subscription!!");
		document.getElementById("contact-name").value = "";
		document.getElementById("contact-email").value = "";
		return event.preventDefault();
	}
}
