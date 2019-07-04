let score = 0;

function teaAnswer() {
    let submitted = document.querySelector("#tea");
    submitted.classList.add('done');
    let correct = document.querySelector('input#leaves').checked;
    if (correct == true) {
        score += 1;
    }
}

function sugarAnswer() {
    let submitted = document.querySelector("#sugar");
    submitted.classList.add('done');
    let correct = document.querySelector('input#sugarcane').checked;
    if (correct == true) {
        score += 1;
    }
}

function rotiAnswer() {
    let submitted = document.querySelector("#roti");
    submitted.classList.add('done');
    let correct = document.querySelector('input#flour-salt-water').checked;
    if (correct == true) {
        score += 1;
    }
}

function milkAnswer() {
    let submitted = document.querySelector("#youghurt-made");
    submitted.classList.add('done');
    let correct = document.querySelector('input#milk').checked;
    if (correct == true) {
        score += 1;
    }
}

function edibleAnswer() {
    let submitted = document.querySelector("#edible-food");
    submitted.classList.add('done');
    let correct = document.querySelector('input#edible').checked;
    if (correct == true) {
        score += 1;
    }
}

function honeyAnswer() {
    let submitted = document.querySelector("#honey-rot");
    submitted.classList.add('done');
    let correct = document.querySelector('input#honey').checked;
    if (correct == true) {
        score += 1;
    }
}

function gelatinAnswer() {
    let submitted = document.querySelector("#gelatin");
    submitted.classList.add('done');
    let correct = document.querySelector('input#skin-and-bones').checked;
    if (correct == true) {
        score += 1;
    }
}

function checkScores() {
    if (score == 7) {
        alert("Congratulations!! You did a great job. You have scored " + score + " out of 7");

    } else {
        alert("You have scored " + score + " out of 7");
    }
}