let pisteet=0




function myFunction (){

    let four=document.getElementById("HistoriaNeljäs")
    document.getElementById("vastaus1").preventdefault
   if (four.checked==true){
     pisteet++;
     document.getElementById("vastaus1").innerHTML="Oikein, sait pisteen"
   }else{
     document.getElementById("vastaus1").innerHTML="väärin. Oikea vastaus on Antiikin Rooma"
   }
   document.getElementById("button1").style.display="none";
  }
  
  function myFunction2 (){
    let option1=document.getElementById("Aristoteles").value
    
  document.getElementById("vastaus2").innerHTML=""
  
  if (option1==1){
    pisteet++;
    document.getElementById("vastaus2").innerHTML+="oikein, sait pisteen"
  }else{
    document.getElementById("vastaus2").innerHTML="väärin. Oikea vastaus on Aristoteles. "
  }
  document.getElementById("button2").style.display="none";
  }
  
  function myFunction3 (){
  let option1= document.getElementById("Porvari1").value
  let option2= document.getElementById("Porvari2").value
  let option3= document.getElementById("Porvari3").value
  let option4= document.getElementById("Porvari4").value
  
  if (option1==1&&option2==4&&option3==3&&option4==2){
    pisteet++;
    document.getElementById("vastaus3").innerHTML="oikein, sait pisteen"
  }else{
    document.getElementById("vastaus3").innerHTML="väärin. Keskiajan säätyjen oikea järjestys olisi aatelinen, pappi, porvari ja viimeisenä talonpoika"
  }
  document.getElementById("button3").style.display="none";
  
  }
  
  function myFunction4 (){
  let input=document.getElementById("input1").value
  let oikea="Mikael Agricola"
  if(input==oikea){
    pisteet++;
  document.getElementById("vastaus4").innerHTML="oikein, sait pisteen"
  }else{
  document.getElementById("vastaus4").innerHTML="väärin. Oikea vastaus olisi ollut Mikael Agricola"
  }
  document.getElementById("button4").style.display="none";
  
  }
  
  function myFunction5 (){
    let option1=document.getElementById("q1")
    if (option1.checked==true){
      pisteet++;
      document.getElementById("vastaus5").innerHTML="oikein, sait pisteen"
    }
    else{
      document.getElementById("vastaus5").innerHTML="väärin. Amerikka löydettiin kyseisenä vuonna"
    }
    document.getElementById("button5").style.display="none";
  }

  function myFunction6 (){
    
    if (pisteet==0){
      document.getElementById("vastaus6").innerHTML="sait 0 pistettä viidestä. Tämä on huono tulos."
    }else if(pisteet==1){ 
    document.getElementById("vastaus6").innerHTML="Sait vain 1 pisteen viidestä"
  }else if(pisteet==2){
    document.getElementById("vastaus6").innerHTML="Sait vain 2 pistettä viidestä"
  }else if(pisteet==3){
    document.getElementById("vastaus6").innerHTML="Sait 3 pistettä viidestä"
  }else if(pisteet==4){
    document.getElementById("vastaus6").innerHTML="Hyvä! Sait 4 pistettä viidestä"
  }else if(pisteet==5){
    document.getElementById("vastaus6").innerHTML="Hyvä! vastasit kaikkiin kysymyksiin oikein"
  }
console.log(pisteet)

}
