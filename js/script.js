//Meveena Ramadoss

let number1= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number2= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Yhteenlasku").innerHTML = "Yhteenlasku: "+number1 + "+" + number2;

function resultnum1(){
    let jus1 = (document.getElementById("answer1").value);
    let answer1= Number(number1 + number2)
  

    if (jus1 == answer1) {
        document.getElementById("result1").innerHTML =("Oikein");
        
    }
    else{
        document.getElementById("result1").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer1);
      
    }
}


let number3= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number4= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Vähennyslasku").innerHTML = "Vähennyslasku: "+number3 + "-" + number4;

function resultnum2(){
    let jus2= (document.getElementById("answer2").value);
    let answer2= Number(number3 - number4)
  

    if (jus2 == answer2) {
        document.getElementById("result2").innerHTML = ("Oikein");
        
    }
    else{
        document.getElementById("result2").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" §"+answer2);
      
    }
}

let number5= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number6= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Kertolasku").innerHTML = "Kertolasku: "+number5 + "*" + number6;

function resultnum3(){
    let jus3= (document.getElementById("answer3").value);
    let answer3= Number(number5 * number6)
  

    if (jus3 == answer3) {
        document.getElementById("result3").innerHTML = ("Oikein");
        
    }
    else{
        document.getElementById("result3").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer3);
      
    }
}

let number7= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number8= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Jakolasku").innerHTML = "Jakolasku: "+number7 + "/" + number8;

function resultnum4(){
    let jus4= (document.getElementById("answer4").value);
    let answer4= Number(number7 / number8)
  

    if (jus4 == answer4) {
        document.getElementById("result4").innerHTML = ("Oikein");
        
    }
    else{
        document.getElementById("result4").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" "+answer4);
      
    }
}

let number9= (Math.floor(Math.random()*(50-10+1)+10)) ;
let number10= (Math.floor(Math.random()*(10-10+1)+10)) ;
document.getElementById("Vertaa ja Merkitse <tai>").innerHTML = "Vertaa ja Merkitse kumppi on isoin: "+"<" +"tai"+">"+" "+number3 +"tai"+number4;

function resultnum5(){
    let jus5= (document.getElementById("answer5").value);
    /*let answer5= Number(number9 < number10)*/
  

    if ((number9 > number10) ==jus5){
        document.getElementById("result5").innerHTML = ("Oikein");
        
    }
    else{
        document.getElementById("result5").innerHTML = ("Väärin!"+" "+"Oikea vastaus on"+" ");
      
    }

}
function addall() { 
    resultnum1()
    resultnum2()
    resultnum3()
    resultnum4()
    resultnum5()
}



   /* function getRndInteger(min,max){
        return Math.floor(Math.random()) *(min-max+1) + min;
    }
/** 
    function resultnum() {
        document.getElementById("result1").innerHTML = "Paragraph changed.";
      }
   
   
    
    /**If(10>c) Document.getElemenybyid("Anika").innerhtml="input value is greater");
    Else
    Document.getElemenybyid("Anika").innerhtml="input value is correct");


/**function DecimalGenerate() {
    var min = 1.03,
        max = 5.99,
        NumberResult = Math.random() * (max - min) + min;

    $('#text1').val(parseFloat(NumberResult).toFixed( 2 ));
};

$( document ).ready(function() {
DecimalGenerate();
});

function result9() {
let number1=(Math.floor(Math.random)*100)+1;
let number2=(Math.floor(Math.random)*100)+1;
document.getElementById("number1")=number1;
document.getElementById("number1")=number2;


**/

      /*  firstNumbers[i] = (int)(Math.random() * 50 + 1);  // in the range 1 to 50
        secondNumbers[i] = (int)(Math.random() * 50); // in the range 0 to 49
    */

