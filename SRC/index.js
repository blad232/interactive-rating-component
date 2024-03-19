const ratingButtons = document.getElementsByClassName("--bigger-button");
const submit = document.getElementById("submit");
const ratingScore = document.getElementById("rating-score");
const card = document.getElementsByClassName("card");
const answerCard = document.getElementsByClassName("--answer-block");
let valor = 0;

for (let i = 0; i < ratingButtons.length; i++) {
	ratingButtons[i].addEventListener("click", (event) => {
		valor = parseInt(ratingButtons[i].innerText);

		//reseting button colors
		for (let s = 0; s < ratingButtons.length; s++) {
			ratingButtons[s].style.background = "var(--Star-Grey)";
			ratingButtons[s].style.color = "var(--Light-Grey)";
		}
		ratingButtons[i].style.background = "var(--Orange)";
		ratingButtons[i].style.color = "var(--White)";
	});
}

submit.addEventListener("click", () => {
	if (valor !== 0) {
		card[0].classList.add("hide");
		answerCard[0].classList.remove("hide");
		ratingScore.innerText = `You selected ${valor} out of 5`;
	} else {
		window.alert("You Must select a value");
	}
});
