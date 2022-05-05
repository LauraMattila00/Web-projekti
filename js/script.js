//mevee
//Yhteenlasku
let number1= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number2= (Math.floor(Math.random()*(20-05+1)+05)) ;
document.getElementById("Yhteenlasku").innerHTML = "Yhteenlasku: "+number1 + "+" + number2;
let count = 0;
function resultnum1(){
    let jus1 = (document.getElementById("answer1").value);
    let answer1= Number(number1 + number2)
  

    if (jus1 == answer1) {
        document.getElementById("result1").innerHTML =("Oikein");
        count++;
    }
    else{
        document.getElementById("wrong1").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer1);
      
    }
}

//Vähennylasku
let number3= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number4= (Math.floor(Math.random()*(20-10+1)+10)) ;
document.getElementById("Vähennyslasku").innerHTML = "Vähennyslasku: "+number3 + "-" + number4;

function resultnum2(){
    let jus2= (document.getElementById("answer2").value);
    let answer2= Number(number3 - number4)
  

    if (jus2 == answer2) {
        document.getElementById("result2").innerHTML = ("Oikein");
        count++;
    }
    else{
        document.getElementById("wrong2").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer2);
      
    }
}

//Kertolasku
let number5= (Math.floor(Math.random()*(20-10+1)+5)) ;
let number6= (Math.floor(Math.random()*(10-5+1)+2)) ;
document.getElementById("Kertolasku").innerHTML = "Kertolasku: "+number5 + "*" + number6;

function resultnum3(){
    let jus3= (document.getElementById("answer3").value);
    let answer3= Number(number5 * number6)
  

    if (jus3 == answer3) {
        document.getElementById("result3").innerHTML = ("Oikein");
        count++;
    }
    else{
        document.getElementById("wrong3").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer3);
      
    }
}

//Jakolasku
let number7= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number8= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Jakolasku").innerHTML = "Jakolasku: "+number7 + "/" + number8;

function resultnum4(){
    let jus4= (document.getElementById("answer4").value);
    let answer4= Number(number7 / number8)
  

    if (jus4 == answer4) {
        document.getElementById("result4").innerHTML = ("Oikein");
        count++;
    }
    else{
        document.getElementById("wrong4").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer4);
      
    }
}

//Vertaa lasku
let number9= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number10= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Vertaa ja Merkitse <tai>").innerHTML = "Vertaa ja kirjoittaa kumppi on isoin: "+"<" +"tai"+">"+" "+number9 +" "+"tai"+" "+number10;

function resultnum5(){
    let jus5= (document.getElementById("answer5").value);
    /*let answer5= Number(number9 < number10)*/
  

    if (number9 > number10){
       if(number9==jus5) {

        document.getElementById("result5").innerHTML = ("Oikein");
        count++;
       }
       else{
        document.getElementById("wrong5").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+number9);

       }
    }
    else if (number9 < number10){
        if(number10==jus5) {

            document.getElementById("result5").innerHTML = ("Oikein");
            count++;} 
        else{
            document.getElementById("wrong5").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+number10);
        }    
       
      
    }

}
function addall() { 
    resultnum1()
    resultnum2()
    resultnum3()
    resultnum4()
    resultnum5()
    document.getElementById("count").innerHTML="Pisteesi on "+count;

/*styling*/
    if(count <= 4){
        document.getElementById("keepitup").style.display="inline";
    document.getElementById("marks").innerHTML="HYVÄ! YRITTÄKÄÄ UUDESTAAN.";

    }

   else{
    
    document.getElementById("good").style.display="inline";
    document.getElementById("marks").innerHTML="HIENOA! SAIT TÄYDEEN PISTEEN.";}
}

 
