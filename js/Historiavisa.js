function myFunction (){

    let four=document.getElementById("HistoriaNeljäs")
    document.getElementById("vastaus1").preventdefault
   if (four.checked==true){
     document.getElementById("vastaus1").innerHTML="Oikein, sait pisteen"
   }else{
     document.getElementById("vastaus1").innerHTML="väärin"
   }
   document.getElementById("button1").style.display="none";
  }
  
  function myFunction2 (){
    let option1=document.getElementById("Aristoteles").value
    
  document.getElementById("vastaus2").innerHTML=""
  
  if (option1==1){
    document.getElementById("vastaus2").innerHTML="oikein, sait pisteen"
  }else{
    document.getElementById("vastaus2").innerHTML="väärin"
  }
  document.getElementById("button2").style.display="none";
  }
  
  function myFunction3 (){
  let option1= document.getElementById("Porvari1").value
  let option2= document.getElementById("Porvari2").value
  let option3= document.getElementById("Porvari3").value
  let option4= document.getElementById("Porvari4").value
  
  if (option1==1&&option2==4&&option3==3&&option4==2){
    document.getElementById("vastaus3").innerHTML="oikein, sait pisteen"
  }else{
    document.getElementById("vastaus3").innerHTML="väärin"
  }
  document.getElementById("button3").style.display="none";
  
  }
  
  function myFunction4 (){
  let input=document.getElementById("input1").value
  let oikea="Mikael Agricola"
  if(input==oikea){
  document.getElementById("vastaus4").innerHTML="oikein, sait pisteen"
  }else{
  document.getElementById("vastaus4").innerHTML="väärin"
  }
  document.getElementById("button4").style.display="none";
  
  }
  
  function myFunction5 (){
    let option1=document.getElementById("q1")
    if (option1.checked==true){
      document.getElementById("vastaus5").innerHTML="oikein, sait pisteen"
    }else{
      document.getElementById("vastaus5").innerHTML="väärin"
    }
    document.getElementById("button5").style.display="none";
  }
  
  
  function result() {
    var score=0;
    var x=document.getElementById("vastaus1");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus2");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus3");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus4");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus5");
    score = eval (score) + eval(x.value);
    alert("you scored "+score +" out of 5")
  }
  
  function myFunction6 (){
    var score=0;
    var x=document.getElementById("vastaus1");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus2");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus3");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus4");
    score = eval (score) + eval(x.value);
    var x=document.getElementById("vastaus5");
    score = eval (score) + eval(x.value);
    document.getElementById("vastaus6").innerHTML= "jahuu "+ score
  }
  console.log(x)