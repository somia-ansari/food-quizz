function checkScores() {

    let score = 0;
    // answers
    let firstAnswer = document.querySelector('input#leaves').checked;
    let secondAnswer = document.querySelector('input#sugarcane').checked;
    let thirdAnswer = document.querySelector('input#flour-salt-water').checked;
    let forthAnswer = document.querySelector('input#milk').checked;
    let fifthAnswer = document.querySelector('input#edible').checked;
    let sixthAnswer = document.querySelector('input#honey').checked;
    let seventhAnswer = document.querySelector('input#skin-and-bones').checked;

    let answers = [firstAnswer, secondAnswer, thirdAnswer, forthAnswer, fifthAnswer, sixthAnswer, seventhAnswer]
    for (let i = 0; i < answers.length; i++) {

        if (answers[i] == true) {
            score += 1;
        }
    }
    if (score == 7) {
        alert("Congratulations!! You did a great job. You have scored " + score + " out of 7");

    } else {
        alert("You have scored " + score + " out of 7");
    }
}
