import googleMaps from "../images/googleMaps.png";

export default function contact() {
	const card = document.querySelector(".card");
	card.style.width = "800px";
	card.style.height = "650px";

	const contactUsHeading = document.createElement("div");
	const contactInfo = document.createElement("div");
	const hoursHeading = document.createElement("div");
	const hoursAvailable = document.createElement("div");
	const hoursUnavailable = document.createElement("div");
	const contactHeading = document.createElement("div");
	const phoneNumber = document.createElement("div");
	const email = document.createElement("div");
	const locationContainer = document.createElement("div");
	const locationHeading = document.createElement("div");
	const location = document.createElement("div");
	const locationImage = document.createElement("img");

	contactUsHeading.textContent = "Contact Us";
	hoursHeading.textContent = "Hours";
	hoursAvailable.textContent = "Mon-Fri: 10:30 AM - 8:00PM";
	hoursUnavailable.textContent = "Sun & Mon: Closed";
	contactHeading.textContent = "Contact Info";
	phoneNumber.textContent = "321-1532-3123";
	email.textContent = "support@innersloth.com";
	locationHeading.textContent = "Location";
	location.textContent = "Yan Ting, Singapore 247912, Singapore";

	locationImage.src = googleMaps;
	locationImage.style.width = "500px";
	locationImage.style.height = "300px";

	contactUsHeading.classList.add("contactUsHeading");
	contactInfo.classList.add("contactInfo");
	locationContainer.classList.add("locationContainer");

	hoursHeading.append(hoursAvailable, hoursUnavailable);
	contactHeading.append(phoneNumber, email);
	locationContainer.append(locationHeading, location, locationImage);

	contactInfo.append(hoursHeading, contactHeading);

	card.append(contactUsHeading, contactInfo, locationContainer);
}
