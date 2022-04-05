// Laura Mattila TIK22KM

let points = 0;
let questions = 0;

/**document.getElementById("button1").onclick = function t04() {
    document.getElementById("answer1").innerHTML = "";

    if (document.getElementById("choice3").checked == true) {
        document.getElementById("answer1").innerHTML = "Vastauksesi on oikein!";
        points += 1;
    } else if (document.getElementById("choice1").checked == true || document.getElementById("choice2").checked == true) {
        document.getElementById("answer1").innerHTML = "Vastauksesi on väärin. Oikea vastaus on karhu.";
    } else {
        alert("Valitse vastausvaihtoehto!");
        //document.getElementById("answer1").innerHTML = "Valitse vastausvaihtoehto :)";
    }

    //document.getElementById("points1").innerHTML = "Oikeat vastaukset: " + points + " / 5.";

}

**/

document.getElementById("answer1").onclick = function t01() {
    if (document.getElementById("choice3").focus == true) {
        document.getElementById("question1").innerHTML = "<h3>Vastauksesi on oikein!</h3>";
        points++;
        questions++;
    } else if (document.getElementById("choice1").focus == true || document.getElementById("choice2").focus == true) {
        document.getElementById("question1").innerHTML = "<h3>Väärin. Oikea vastaus on karhu.";
        questions++;
    } else {
        alert("Valitse vastausvaihtoehto kysymykseen 1!");
    }

    document.getElementById("question1").innerHTML += "<br> Karhu on Euroopan suurin petoeläin. Karhu viihtyy parhaiten metsissä ja soilla. Karhu on kaikkiruokainen: se syö esimerkiksi marjoja, viljaa, kalaa, lintuja ja nisäkkäitä. Karhu nukkuu lumisen ajan talviunta.<br><br> Olet vastannut " + questions + " / 5 kysymykseen. <br>Pisteet: " + points + " / 5.";
}