var a = getRndInteger(1, 10);
var b = getRndInteger(1, 10);
var c = getRndInteger(1, 10);
var d = getRndInteger(1, 10);
var e = getRndInteger(1, 10);
var f = getRndInteger(1, 10);
var g = getRndInteger(1, 10);
var h = getRndInteger(1, 10);
var i = getRndInteger(1, 10);
var j = getRndInteger(1, 10);

document.getElementById("lasku1").innerHTML = a + " * " + b;
document.getElementById("lasku2").innerHTML = c + " * " + d;
document.getElementById("lasku3").innerHTML = e + " * " + f;
document.getElementById("lasku4").innerHTML = g + " * " + h;
document.getElementById("lasku5").innerHTML = i + " * " + j;

function tulokset() {

    let vastaus = Number(document.getElementById("vastaus").value);
    let vastaus1 = Number(document.getElementById("vastaus1").value);
    let vastaus2 = Number(document.getElementById("vastaus2").value);
    let vastaus3 = Number(document.getElementById("vastaus3").value);
    let vastaus4 = Number(document.getElementById("vastaus4").value);
    let oikein = 0;

    let tulo = a * b;
    let tulo1 = c * d;
    let tulo2 = e * f;
    let tulo3 = g * h;
    let tulo4 = i * j;

// LASKU 1
    if (vastaus == tulo) {
        document.getElementById("tulos").innerHTML = ("Oikein")
        document.getElementById("tulos").style.color = "green";
        oikein++;
    }
    else {
        document.getElementById("tulos").innerHTML = "Väärin, oikea vastaus oli " + tulo;
        document.getElementById("tulos").style.color = "red";
    }

// LASKU 2
    if (vastaus1 == tulo1) {
        document.getElementById("tulos1").innerHTML = ("Oikein")
        document.getElementById("tulos1").style.color = "green";
        oikein++;
    }
    else {
        document.getElementById("tulos1").innerHTML = "Väärin, oikea vastaus oli " + tulo1;
        document.getElementById("tulos1").style.color = "red";
    }

// LASKU 3
    if (vastaus2 == tulo2) {
        document.getElementById("tulos2").innerHTML = ("Oikein")
        document.getElementById("tulos2").style.color = "green";
        oikein++;
    }
    else {
        document.getElementById("tulos2").innerHTML = "Väärin, oikea vastaus oli " + tulo2;
        document.getElementById("tulos2").style.color = "red";
    }

    // LASKU 4
    if (vastaus3 == tulo3) {
        document.getElementById("tulos3").innerHTML = ("Oikein")
        document.getElementById("tulos3").style.color = "green";
        oikein++;
    }
    else {
        document.getElementById("tulos3").innerHTML = "Väärin, oikea vastaus oli " + tulo3;
        document.getElementById("tulos3").style.color = "red";
    }

    // LASKU 5
    if (vastaus4 == tulo4) {
        document.getElementById("tulos4").innerHTML = ("Oikein")
        document.getElementById("tulos4").style.color = "green";
        oikein++;
    }
    else {
        document.getElementById("tulos4").innerHTML = "Väärin, oikea vastaus oli " + tulo4;
        document.getElementById("tulos4").style.color = "red";
    }
    
    if (oikein < 3) {
        document.getElementById("tulokset").innerHTML = oikein + "/5 oikein, yritä uudestaan."
    }
    if (oikein < 5 && oikein > 2) {
        document.getElementById("tulokset").innerHTML = oikein + "/5 oikein, hyvin tehty!"
    }
    if (oikein > 4) {  
        document.getElementById("tulokset").innerHTML = oikein + "/5 oikein, täydellinen suoritus!"
    }

    document.getElementById("button").style.visibility = "hidden";

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;


    
}