const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const section = document.querySelector("section");
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		body.style.background = "#353a3e";
		body.style.color = "#fff";
        section.style.background = "#353a3e";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
        section.style.background = "#fff";
		modeButton.textContent = "🌙";
	}
});