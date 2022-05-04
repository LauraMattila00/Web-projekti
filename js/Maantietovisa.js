/* Tuomas Tani */

let pisteet = 0;

// Tietovisan javascript toiminta if, else funktiot.
// Kysymys 1.
document.getElementById("Pohjois-Pohjanmaa").onclick = function Kysymys1 () {
    if (document.getElementById("Pohjois-Pohjanmaa1").checked == true) {
        pisteet++;
        document.getElementById("palaute1").innerHTML = "Vastasit oikein!"
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    } else {
        document.getElementById("palaute1").innerHTML = "Vastasit väärin! Oikea vastaus on Pohjois-Pohjanmaa."
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    }
    document.getElementById("Pohjois-Pohjanmaa").style.display = "none";
}

// Kysymys 2.
document.getElementById("Keski-Suomi").onclick = function Kysymys2 () {
    if (document.getElementById("Keski-Suomi2").checked == true) {
        pisteet++;
        document.getElementById("palaute2").innerHTML = "Vastasit oikein!"
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    } else {
        document.getElementById("palaute2").innerHTML = "Vastasit väärin! Oikea vastaus on Keski-Suomi."
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    }
    document.getElementById("Keski-Suomi").style.display = "none";
}

// Kysymys 3.
document.getElementById("Rovaniemi").onclick = function Kysymys3 () {
    if (document.getElementById("Rovaniemi3").checked == true) {
        pisteet++;
        document.getElementById("palaute3").innerHTML = "Vastasit oikein!"
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    } else {
        document.getElementById("palaute3").innerHTML = "Vastasit väärin! Oikea vastaus on Rovaniemi."
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    }
    document.getElementById("Rovaniemi").style.display = "none";
}

// Kysymys 4.
document.getElementById("Salo").onclick = function Kysymys4 () {
    if (document.getElementById("Salo4").checked == true) {
        pisteet++;
        document.getElementById("palaute4").innerHTML = "Vastasit oikein!"
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    } else {
        document.getElementById("palaute4").innerHTML = "Vastasit väärin! Oikea vastaus on Salo."
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    }
    document.getElementById("Salo").style.display = "none";
}

// Kysymys 5.
document.getElementById("Joensuu").onclick = function Kysymys5 () {
    if (document.getElementById("Joensuu5").checked == true) {
        pisteet++;
        document.getElementById("palaute5").innerHTML = "Vastasit oikein!"
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    } else {
        document.getElementById("palaute5").innerHTML = "Vastasit väärin! Oikea vastaus on Joensuu."
        document.getElementById("pisteesi").innerHTML = pisteet + "/5";
    }
    document.getElementById("Joensuu").style.display = "none";
}