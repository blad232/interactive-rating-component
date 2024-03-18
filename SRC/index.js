const ratingButtons = document.getElementsByClassName("rating-button");
const submit = document.getElementById("submit");
const ratingScore = document.getElementById("rating-score");
const card = document.getElementsByClassName("card");
const answerCard = document.getElementsByClassName("--answer-block");
let valor = 0;
for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].addEventListener("click", () => {
        valor = parseInt(ratingButtons[i].innerText);

    })
}

submit.addEventListener("click", () => {
    if (valor !== 0) {
        card[0].classList.add("hide");
        answerCard[0].classList.remove("hide");
        ratingScore.innerText = `You selected ${valor} out of 5`;
    } else {
        window.alert("You Must select a value");
    }
})