let pisteet = 0;

document.getElementById("sveitsi").onclick = function () {
    if (document.getElementById("sveitsi1").checked == true) {
        pisteet++;
        document.getElementById("pisteet1").innerHTML = pisteet;
        document.getElementById("palaute1").innerHTML = "Oikea vastaus!"
    } else {
        document.getElementById("pisteet1").innerHTML = pisteet;
        document.getElementById("palaute1").innerHTML = "Väärä vastaus! Kuvassa on Sveitsin lippu."
    }
    document.getElementById("sveitsi").style.display = "none";
    return false;
}   

document.getElementById("ruotsi").onclick = function () {
    if (document.getElementById("ruotsi2").checked == true) {
        pisteet++;
        document.getElementById("pisteet2").innerHTML = pisteet;
        document.getElementById("palaute2").innerHTML = "Oikea vastaus!"
    } else {
        document.getElementById("pisteet2").innerHTML = pisteet;
        document.getElementById("palaute2").innerHTML = "Väärä vastaus! Kuvassa on Ruotsin lippu."
    }
    document.getElementById("ruotsi").style.display = "none";
    return false;
}

document.getElementById("espanja").onclick = function () {
    if (document.getElementById("espanja3").checked == true) {
        pisteet++;
        document.getElementById("pisteet3").innerHTML = pisteet;
        document.getElementById("palaute3").innerHTML = "Oikea vastaus!"
    } else {
        document.getElementById("pisteet3").innerHTML = pisteet;
        document.getElementById("palaute3").innerHTML = "Väärä vastaus! Kuvassa on Espanjan lippu."
    }
    document.getElementById("espanja").style.display = "none";
    return false;
}

document.getElementById("usa").onclick = function () {
    if (document.getElementById("usa4").checked == true) {
        pisteet++;
        document.getElementById("pisteet4").innerHTML = pisteet;
        document.getElementById("palaute4").innerHTML = "Oikea vastaus!"
    } else {
        document.getElementById("pisteet4").innerHTML = pisteet;
        document.getElementById("palaute4").innerHTML = "Väärä vastaus! Kuvassa on Yhdysvaltojen lippu."
    }
    document.getElementById("usa").style.display = "none";
    return false;
}

document.getElementById("japani").onclick = function () {
    if (document.getElementById("japani5").checked == true) {
        pisteet++;
        document.getElementById("pisteet5").innerHTML = pisteet;
        document.getElementById("palaute5").innerHTML = "Oikea vastaus!"
    } else {
        document.getElementById("pisteet5").innerHTML = pisteet;
        document.getElementById("palaute5").innerHTML = "Väärä vastaus! Kuvassa on Japanin lippu."
    }
    document.getElementById("japani").style.display = "none";
    return false;
}
