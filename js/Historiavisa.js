let pisteet=0
let vastaukset=0
//Ensimmäinen funktio
function myFunction (){

    let four=document.getElementById("HistoriaNeljäs")
    document.getElementById("vastaus1").preventdefault
   if (four.checked==true){
     pisteet++;
     vastaukset++;
     document.getElementById("vastaus1").innerHTML="Oikein. Rooman valtakunta tunnetaan sen edistyneestä arkkitehtuurista, sen tieverkostoista, että kulttuurista"
   }else{
     vastaukset++;
     document.getElementById("vastaus1").innerHTML="väärin. Oikea vastaus on Antiikin Rooma"
   }
   document.getElementById("button1").style.display="none";
  }
  
  //toinen funktio
  function myFunction2 (){
    let option1=document.getElementById("Aristoteles").value
    
  document.getElementById("vastaus2").innerHTML=""
  
  if (option1==1){
    pisteet++;
    vastaukset++;
    document.getElementById("vastaus2").innerHTML+="oikein. Aristoteleksen filosofiset pohdinnat ovat vaikuttaneet todella paljon länsimaalaiseen ajattelukulttuuriin"
  }else{
    vastaukset++;
    document.getElementById("vastaus2").innerHTML="väärin. Oikea vastaus on Aristoteles. "
  }
  document.getElementById("button2").style.display="none";
  }
  
  //kolmas funktio
  function myFunction3 (){
  let option1= document.getElementById("Porvari1").value
  let option2= document.getElementById("Porvari2").value
  let option3= document.getElementById("Porvari3").value
  let option4= document.getElementById("Porvari4").value
  
  if (option1==1&&option2==4&&option3==3&&option4==2){
    pisteet++;
    vastaukset++;
    document.getElementById("vastaus3").innerHTML="oikein. Aatelisia pidettiin yhteiskunnan kermana keskiajalla. Vain kuninkaallisten säätyä pidettiin heitä arvokkaampana hierarkkisessa yhteiskunnassa"
  }else{
    vastaukset++;
    document.getElementById("vastaus3").innerHTML="väärin. Keskiajan säätyjen oikea järjestys olisi aatelinen, pappi, porvari ja viimeisenä talonpoika"
  }
  document.getElementById("button3").style.display="none";
  
  }
  
  //Neljäs funktio
  function myFunction4 (){
  let input=document.getElementById("input1").value
  let oikea="Mikael Agricola"
  if(input==oikea){
    pisteet++;
    vastaukset++;
  document.getElementById("vastaus4").innerHTML="oikein. Mikael Agricola loi pohjan Suomen kielen kehitykselle"
  }else{
    vastaukset++;
  document.getElementById("vastaus4").innerHTML="väärin. Oikea vastaus olisi ollut Mikael Agricola"
  }
  document.getElementById("button4").style.display="none";
  
  }
 
  //viides funktio
  function myFunction5 (){
    let option1=document.getElementById("q1")
    if (option1.checked==true){
      pisteet++;
      vastaukset++;
      document.getElementById("vastaus5").innerHTML="oikein. Historia kertoo, että tutkimusmatkailija Kristoffer Kolumbus virallisesti löysi Amerikan vuonna 1492"
    }
    else{
      vastaukset++;
      document.getElementById("vastaus5").innerHTML="väärin. Amerikka löydettiin kyseisenä vuonna"
    }
    document.getElementById("button5").style.display="none";
  }

  //kuudes funktio
  function myFunction6 (){
    
    if (pisteet==0&&vastaukset==5){
      document.getElementById("vastaus6").innerHTML="sait 0 pistettä viidestä. Tämä on huono tulos."
    }else if(pisteet==1&&vastaukset==5){ 
    document.getElementById("vastaus6").innerHTML="Sait vain 1 pisteen viidestä"
  }else if(pisteet==2&&vastaukset==5){
    document.getElementById("vastaus6").innerHTML="Sait vain 2 pistettä viidestä"
  }else if(pisteet==3&&vastaukset==5){
    document.getElementById("vastaus6").innerHTML="Sait 3 pistettä viidestä"
  }else if(pisteet==4&&vastaukset==5){
    document.getElementById("vastaus6").innerHTML="Hyvä! Sait 4 pistettä viidestä"
  }else if(pisteet==5&&vastaukset==5){
    document.getElementById("vastaus6").innerHTML="Hyvä! vastasit kaikkiin kysymyksiin oikein"
  }else{
    alert("vastaa kaikkiin kysymyksiin, ennen kuin lopetat")
    document.getElementById("vastaus6").innerHTML=""
  }

  }

