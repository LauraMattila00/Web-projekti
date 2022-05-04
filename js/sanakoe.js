//Jani Tomminen

let piste = 0;




//Tehtävien tarkastus funktio
function k1() {
    if (document.getElementById("valinta1").checked){
        piste++;
        document.getElementById("vastaus1").innerHTML =  "✔️Oikein";
        
} 
else if (document.getElementById("valinta2").checked){
    document.getElementById("vastaus1").innerHTML =  "❌Väärin";
    document.getElementById("selitys1").innerHTML =  "Oikea vastaus Tietokone";
}
else if (document.getElementById("valinta3").checked){
    document.getElementById("vastaus1").innerHTML =  "❌Väärin";
    document.getElementById("selitys1").innerHTML =  "Oikea vastaus Tietokone";
    
}
document.getElementById("button1").disabled = true;
}

function k2() {
    if (document.getElementById("valinta5").checked){
        piste++;
        document.getElementById("vastaus2").innerHTML =  "✔️Oikein";
} 
else if (document.getElementById("valinta4").checked){
    document.getElementById("vastaus2").innerHTML =  "❌Väärin";
    document.getElementById("selitys2").innerHTML =  "Oikea vastaus Näppäimistö";
}
else if (document.getElementById("valinta6").checked){
    document.getElementById("vastaus2").innerHTML =  "❌Väärin";
    document.getElementById("selitys2").innerHTML =  "Oikea vastaus Näppäimistö";
    
}
document.getElementById("button2").disabled = true;
}

function k3() {
    if (document.getElementById("valinta7").checked){
        piste++;
        document.getElementById("vastaus3").innerHTML =  "✔️Oikein";
} 
else if (document.getElementById("valinta8").checked){
    document.getElementById("vastaus3").innerHTML =  "❌Väärin";
    document.getElementById("selitys3").innerHTML =  "Oikea vastaus Emolevy";
}
else if (document.getElementById("valinta9").checked){
    document.getElementById("vastaus3").innerHTML =  "❌Väärin";
    document.getElementById("selitys3").innerHTML =  "Oikea vastaus Emolevy";
    
}
document.getElementById("button3").disabled = true;
}

function k4() {
    if (document.getElementById("valinta12").checked){
        piste++;
        document.getElementById("vastaus4").innerHTML =  "✔️Oikein";
} 
else if (document.getElementById("valinta11").checked){
    document.getElementById("vastaus4").innerHTML =  "❌Väärin";
    document.getElementById("selitys4").innerHTML =  "Oikea vastaus Computer mouse";
}
else if (document.getElementById("valinta10").checked){
    document.getElementById("vastaus4").innerHTML =  "❌Väärin";
    document.getElementById("selitys4").innerHTML =  "Oikea vastaus Computer mouse";
    
}
document.getElementById("button4").disabled = true;
}

function k5() {
    if (document.getElementById("valinta15").checked){
        piste++;
        document.getElementById("vastaus5").innerHTML =  "✔️Oikein";
} 
else if (document.getElementById("valinta14").checked){
    document.getElementById("vastaus5").innerHTML =  "❌Väärin";
    document.getElementById("selitys5").innerHTML =  "Oikea vastaus Monitor";
}
else if (document.getElementById("valinta13").checked){
    document.getElementById("vastaus5").innerHTML =  "❌Väärin";
    document.getElementById("selitys5").innerHTML =  "Oikea vastaus Monitor";
    
}
document.getElementById("button5").disabled = true;
}

function pisteet() {
    if (piste == 0){
        document.getElementById("pisteet").innerHTML = "0 / 5 Yritä uudelleen 🤡 " 
    }
    else if (piste == 1){
        document.getElementById("pisteet").innerHTML = "1 / 5 Yritä uudelleen"
    }
    else if (piste == 2){
        document.getElementById("pisteet").innerHTML = "2 / 5 Yritä uudelleen"
    }
    else if (piste == 3){
        document.getElementById("pisteet").innerHTML = "3 / 5 Melkein! kokeile uudestaan 😃"
    }
    else if (piste == 4){
        document.getElementById("pisteet").innerHTML = "4 / 5 Yritä uudelleen "
    }
    else if (piste == 5){
        document.getElementById("pisteet").innerHTML = "5 / 5 Mahtavaa 👍"
    }
}




