const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = "you last visited " + numVisits + " days ago";
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits)