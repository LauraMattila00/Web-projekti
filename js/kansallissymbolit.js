// Laura Mattila TIK22KM

// A function that disables button
function disableButton( firstbutton, secondbutton, thirdbutton ) {
    document.getElementById(firstbutton).disabled = true;
    document.getElementById(secondbutton).disabled = true;
    document.getElementById(thirdbutton).disabled = true;
}

let points = 0;
let questions = 0;

// 1. question

function question1 () {
    if (document.getElementById("choice3").checked) {
        points++;
        document.getElementById("rightwrong1").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice1").checked || document.getElementById("choice2").checked) {
        document.getElementById("rightwrong1").innerHTML = "Vastaus on väärin. Oikea vastaus on karhu.";     
    }

    questions++;
    disableButton("choice1", "choice2", "choice3");
    document.getElementById("questions1").innerHTML = questions;
    document.getElementById("button1").style.display = "none";
    document.getElementById("info1").style.display = "inline-block";
    document.getElementById("question2").style.display = "inline-block";
}

// 2. question

function question2 () {
    if (document.getElementById("choice5").checked) {
        points++;
        document.getElementById("rightwrong2").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice4").checked || document.getElementById("choice6").checked) {
        document.getElementById("rightwrong2").innerHTML = "Vastaus on väärin. Oikea vastaus on laulujoutsen.";     
    }

    questions++;
    disableButton("choice4", "choice5", "choice6");
    document.getElementById("questions2").innerHTML = questions;
    document.getElementById("button2").style.display = "none";
    document.getElementById("info2").style.display = "inline-block";
    document.getElementById("question3").style.display = "inline-block";
}

// 3. question

function question3 () {
    if (document.getElementById("choice8").checked) {
        points++;
        document.getElementById("rightwrong3").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice7").checked || document.getElementById("choice9").checked) {
        document.getElementById("rightwrong3").innerHTML = "Vastaus on väärin. Oikea vastaus on kielo.";     
    }

    questions++;
    disableButton("choice7", "choice8", "choice9");
    document.getElementById("questions3").innerHTML = questions;
    document.getElementById("button3").style.display = "none";
    document.getElementById("info3").style.display = "inline-block";
    document.getElementById("question4").style.display = "inline-block";
}

// 4. question

function question4 () {
    if (document.getElementById("choice10").checked) {
        points++;
        document.getElementById("rightwrong4").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice11").checked || document.getElementById("choice12").checked) {
        document.getElementById("rightwrong4").innerHTML = "Vastaus on väärin. Oikea vastaus on Kalevala.";     
    }

    questions++;
    disableButton("choice10", "choice11", "choice12");
    document.getElementById("questions4").innerHTML = questions;
    document.getElementById("button4").style.display = "none";
    document.getElementById("info4").style.display = "inline-block";
    document.getElementById("question5").style.display = "inline-block";
}

// 5. question

function question5 () {
    if (document.getElementById("choice15").checked) {
        points++;
        document.getElementById("rightwrong5").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice13").checked || document.getElementById("choice14").checked) {
        document.getElementById("rightwrong5").innerHTML = "Vastaus on väärin. Oikea vastaus on kantele.";     
    }

    questions++;
    disableButton("choice13", "choice14", "choice15");
    document.getElementById("questions5").innerHTML = questions;
    document.getElementById("button5").style.display = "none";
    document.getElementById("info5").style.display = "inline-block";
}

/* Buttons 1-15:

document.getElementById("choice1").onclick = function() {
    disableButton("choice1", "choice2", "choice3");
    questions++;
    document.getElementById("info1").style.display = "inline-block";
    document.getElementById("rightwrong1").innerHTML = "Vastaus on väärin. Oikea vastaus on karhu.";
    document.getElementById("questions1").innerHTML = questions;
}

document.getElementById("choice2").onclick = function() {
    disableButton("choice1", "choice2", "choice3");
    questions++;
    document.getElementById("rightwrong1").innerHTML = "Vastaus on väärin. Oikea vastaus on karhu.";
    document.getElementById("info1").style.display = "block";
    document.getElementById("questions1").innerHTML = questions;
}

document.getElementById("choice3").onclick = function() {
    disableButton("choice1", "choice2", "choice3");
    questions++;
    points++;
    document.getElementById("rightwrong1").innerHTML = "Vastaus on oikein!";
    document.getElementById("info1").style.display = "block";
    document.getElementById("questions1").innerHTML = questions;
}

document.getElementById("choice4").onclick = function() {
    disableButton("choice4", "choice5", "choice6");
    questions++;
    document.getElementById("rightwrong2").innerHTML = "Vastaus on väärin. Oikea vastaus on laulujoutsen.";
    document.getElementById("info2").style.display = "block";
    document.getElementById("questions2").innerHTML = questions;
}

document.getElementById("choice5").onclick = function() {
    disableButton("choice4", "choice5", "choice6");
    questions++;
    points++;
    document.getElementById("info2").style.display = "block";
    document.getElementById("rightwrong2").innerHTML = "Vastaus on oikein!";
    document.getElementById("questions2").innerHTML = questions;
}

document.getElementById("choice6").onclick = function() {
    disableButton("choice4", "choice5", "choice6");
    questions++;
    document.getElementById("rightwrong2").innerHTML = "Vastaus on väärin. Oikea vastaus on laulujoutsen.";
    document.getElementById("info2").style.display = "block";
    document.getElementById("questions2").innerHTML = questions;
}

document.getElementById("choice7").onclick = function() {
    disableButton("choice7", "choice8", "choice9");
    questions++;
    document.getElementById("rightwrong3").innerHTML = "Vastaus on väärin. Oikea vastaus on kielo.";
    document.getElementById("info3").style.display = "block";
    document.getElementById("questions3").innerHTML = questions;
}

document.getElementById("choice8").onclick = function() {
    disableButton("choice7", "choice8", "choice9");
    questions++;
    points++;
    document.getElementById("rightwrong3").innerHTML = "Vastaus on oikein!";
    document.getElementById("info3").style.display = "block";
    document.getElementById("questions3").innerHTML = questions;
}

document.getElementById("choice9").onclick = function() {
    disableButton("choice7", "choice8", "choice9");
    questions++;
    document.getElementById("rightwrong3").innerHTML = "Vastaus on väärin. Oikea vastaus on kielo.";
    document.getElementById("info3").style.display = "block";
    document.getElementById("questions3").innerHTML = questions;
}

document.getElementById("choice10").onclick = function() {
    disableButton("choice10", "choice11", "choice12");
    questions++;
    points++;
    document.getElementById("rightwrong4").innerHTML = "Vastaus on oikein!";
    document.getElementById("info4").style.display = "block";
    document.getElementById("questions4").innerHTML = questions;
}

document.getElementById("choice11").onclick = function() {
    disableButton("choice10", "choice11", "choice12");
    questions++;
    document.getElementById("rightwrong4").innerHTML = "Vastaus on väärin. Oikea vastaus on Kalevala.";
    document.getElementById("info4").style.display = "block";
    document.getElementById("questions4").innerHTML = questions;
}

document.getElementById("choice12").onclick = function() {
    disableButton("choice10", "choice11", "choice12");
    questions++;
    document.getElementById("rightwrong4").innerHTML = "Vastaus on väärin. Oikea vastaus on Kalevala.";
    document.getElementById("info4").style.display = "block";
    document.getElementById("questions4").innerHTML = questions;
}

document.getElementById("choice13").onclick = function() {
    disableButton("choice13", "choice14", "choice15");
    questions++;
    document.getElementById("rightwrong5").innerHTML = "Vastaus on väärin. Oikea vastaus on kantele.";
    document.getElementById("info5").style.display = "block";
    document.getElementById("questions5").innerHTML = questions;
}

document.getElementById("choice14").onclick = function() {
    disableButton("choice13", "choice14", "choice15");
    questions++;
    document.getElementById("rightwrong5").innerHTML = "Vastaus on väärin. Oikea vastaus on kantele.";
    document.getElementById("info5").style.display = "block";
    document.getElementById("questions5").innerHTML = questions;
}

document.getElementById("choice15").onclick = function() {
    disableButton("choice13", "choice14", "choice15");
    questions++;
    points++;
    document.getElementById("rightwrong5").innerHTML = "Vastaus on oikein!";
    document.getElementById("info5").style.display = "block";
    document.getElementById("questions5").innerHTML = questions;
}
*/