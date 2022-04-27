// Laura Mattila TIK22KM

let points = 0;
let questions = 0;





function disableButton( firstbutton, secondbutton, thirdbutton ) {
    document.getElementById(firstbutton).disabled = true;
    document.getElementById(secondbutton).disabled = true;
    document.getElementById(thirdbutton).disabled = true;
}



// 1. question

function question1 () {
    document.getElementById("alert1").style.display= "none";

    if (document.getElementById("choice3").checked) {
        points++;
        document.getElementById("rightwrong1").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice1").checked || document.getElementById("choice2").checked) {
        document.getElementById("rightwrong1").innerHTML = "Vastaus on väärin. Oikea vastaus on karhu.";     
    } else {
        document.getElementById("alert1").style.display = "block";
        return;
    }

    questions++;
    disableButton("choice1", "choice2", "choice3");
    document.getElementById("questions1").innerHTML = questions;
    document.getElementById("button1").style.display = "none";
    document.getElementById("info1").style.display = "block";
    document.getElementById("question2").style.display = "block";
}

// 2. question

function question2 () {
    document.getElementById("alert2").style.display= "none";

    if (document.getElementById("choice5").checked) {
        points++;
        document.getElementById("rightwrong2").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice4").checked || document.getElementById("choice6").checked) {
        document.getElementById("rightwrong2").innerHTML = "Vastaus on väärin. Oikea vastaus on laulujoutsen.";     
    } else {
        document.getElementById("alert2").style.display = "block";
        return;
    }

    questions++;
    disableButton("choice4", "choice5", "choice6");
    document.getElementById("questions2").innerHTML = questions;
    document.getElementById("button2").style.display = "none";
    document.getElementById("info2").style.display = "block";
    document.getElementById("question3").style.display = "block";
}

// 3. question

function question3 () {
    document.getElementById("alert3").style.display= "none";

    if (document.getElementById("choice8").checked) {
        points++;
        document.getElementById("rightwrong3").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice7").checked || document.getElementById("choice9").checked) {
        document.getElementById("rightwrong3").innerHTML = "Vastaus on väärin. Oikea vastaus on kielo.";     
    } else {
        document.getElementById("alert3").style.display = "block";
        return;
    }

    questions++;
    disableButton("choice7", "choice8", "choice9");
    document.getElementById("questions3").innerHTML = questions;
    document.getElementById("button3").style.display = "none";
    document.getElementById("info3").style.display = "block";
    document.getElementById("question4").style.display = "block";
}

// 4. question

function question4 () {
    document.getElementById("alert4").style.display= "none";

    if (document.getElementById("choice10").checked) {
        points++;
        document.getElementById("rightwrong4").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice11").checked || document.getElementById("choice12").checked) {
        document.getElementById("rightwrong4").innerHTML = "Vastaus on väärin. Oikea vastaus on Kalevala.";     
    } else {
        document.getElementById("alert4").style.display = "block";
        return;
    }

    questions++;
    disableButton("choice10", "choice11", "choice12");
    document.getElementById("questions4").innerHTML = questions;
    document.getElementById("button4").style.display = "none";
    document.getElementById("info4").style.display = "block";
    document.getElementById("question5").style.display = "block";
}

// 5. question

function question5 () {
    document.getElementById("alert5").style.display= "none";

    if (document.getElementById("choice15").checked) {
        points++;
        document.getElementById("rightwrong5").innerHTML = "Vastaus on oikein!";
    } else if (document.getElementById("choice13").checked || document.getElementById("choice14").checked) {
        document.getElementById("rightwrong5").innerHTML = "Vastaus on väärin. Oikea vastaus on kantele.";     
    } else {
        document.getElementById("alert5").style.display = "block";
        return;
    }

    questions++;
    disableButton("choice13", "choice14", "choice15");
    document.getElementById("questions5").innerHTML = questions;
    document.getElementById("button5").style.display = "none";
    document.getElementById("info5").style.display = "block";
}


function calcPoints () {
    document.getElementById("points").style.display = "block";

    if (points == 0) {
        return document.getElementById("poor").style.display = "block";
    } else if (points < 3) {
        document.getElementById("points1-2").innerHTML = points;
        return document.getElementById("average").style.display = "block";
    } else if (points < 5) {
        document.getElementById("points3-4").innerHTML = points;
        return document.getElementById("good").style.display = "block";
    } else {
        return document.getElementById("excellent").style.display = "block";
    }
}