let buttoncomenzar = document.getElementById("btn-inicio");
let hideinicio = document.getElementById("id-container-inicio");
let alertanombre = document.getElementById("alerta");
let opciones = document.getElementById("id-container-firstvideo");

//  var v1 = document.getElementsByClassName("o-video1");
var playerjs= document.getElementById("playerid");
var playerjs1= document.getElementById("playerid1");
var playerjs2= document.getElementById("playerid2");
var playerjs3= document.getElementById("playerid3");
//-------------------------- players segunda decision-------------------------------
var playerjs4= document.getElementById("playerid4");
var playerjs5= document.getElementById("playerid5");
var playerjs6= document.getElementById("playerid6");

//-------------------------- players tercera decision-------------------------------
var playerjs7= document.getElementById("playerid7");
var playerjs8= document.getElementById("playerid8");
var playerjs9= document.getElementById("playerid9");



var puntos= 0;
var acumu =0;
var acumu2 =0;
var acumu3 =0;
var acumu4 =0;

var snd = new Audio("resources/pop.mp3");
var snd2 = new Audio("resources/final.mp3");


// var nombreinicial= document.getElementById("id-persona-name").innerHTML;

var volver = document.getElementById("id-volver");
var final= document.getElementById("id-container-Final");


final.style.display="none";
// ------------------ texto de puntos-------------------
var puntostext=  document.getElementById("id-puntos").innerHTML; 
// ----------------opciones de videos------------


// -----------------------------------------------------------------------------VIDEOSS---------------------------

// -primera escena---------------

var video1 = document.getElementById("fantasy-video1");
var video2 = document.getElementById("fantasy-video2");
var video3 = document.getElementById("fantasy-video3");
var video4 = document.getElementById("fantasy-video4");

// -segunda escena---------------
var video44 = document.getElementById("fantasy-video44");
var video5= document.getElementById("fantasy-video5");
var video6 = document.getElementById("fantasy-video6");

// -tercera escena---------------
var video7 = document.getElementById("fantasy-video7");
var video8= document.getElementById("fantasy-video8");
var video9 = document.getElementById("fantasy-video9");


// --------------------------------------------------------------------------------------------------------------------------

//--------------botones priemra escena----------------------------
var boton1= document.getElementById("btn1");
var boton2= document.getElementById("btn2");
var boton3= document.getElementById("btn3");

//--------------botones segunda escena----------------------------
var boton4= document.getElementById("btn4");
var boton5= document.getElementById("btn5");
var boton6= document.getElementById("btn6");

//--------------botones tercera escena----------------------------
var boton7= document.getElementById("btn7");
var boton8= document.getElementById("btn8");
var boton9= document.getElementById("btn9");



// ---------------------------------------------------

    
// opciones.style.display="none";
playerjs1.style.display = "none";
playerjs2.style.display = "none";
playerjs3.style.display = "none";

boton1.style.display = "none";
boton2.style.display = "none";
boton3.style.display = "none";
// ---------------------------
playerjs4.style.display = "none";
playerjs5.style.display = "none";
playerjs6.style.display = "none";
boton4.style.display = "none";
boton5.style.display = "none";
boton6.style.display = "none";

// ---------------------------
playerjs7.style.display = "none";
playerjs8.style.display = "none";
playerjs9.style.display = "none";
boton7.style.display = "none";
boton8.style.display = "none";
boton9.style.display = "none";





function Comenzar() {


    //metodo para detectar si la persona ingresó el nombre
    let nombre = document.getElementById("nombre").value;
    if (nombre == "") {     
        alertanombre.style.display = "block";
    } else {
        snd.play();
        alertanombre.style.display = "none";
        hideinicio.style.display = "none";
        document.getElementById("id-persona-name").innerHTML= "Puntos: " +  " ";
       
        document.getElementById("id-persona-final").innerHTML= "!Hola " + nombre + "!";
        video1.play();

//----------------------------------videos primera decision----------------------
video1.ontimeupdate = function () {

    if (video1.currentTime >= 50) {
        // opciones.style.display="block";
        boton1.style.display = "block";
        boton2.style.display = "block";
        boton3.style.display = "block";
        
    }
    else if (video1.currentTime < 50) {
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";
    }
}

video2.ontimeupdate = function () {

    if (video2.currentTime >= 28) {
        boton1.style.display = "none";
        boton2.style.display = "block";
        boton3.style.display = "block";
    }
    else if (video2.currentTime <28) {
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";                
    }
}

video3.ontimeupdate = function () {

    if (video3.currentTime >= 30) {
        boton1.style.display = "block";
        boton2.style.display = "none";
        boton3.style.display = "block";
    }
    else if (video3.currentTime < 30) {
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";            
    }
}
video4.ontimeupdate = function () {

    if (video4.currentTime >= 58) {
        boton4.style.display = "block";
        boton5.style.display = "block";
        boton6.style.display = "block";
    }
    else if (video4.currentTime < 58) {
        boton4.style.display = "none";
        boton5.style.display = "none";
        boton6.style.display = "none";
       

    }
}
//----------------------------------videos segunda decision----------------------

video44.ontimeupdate = function () {

    if (video44.currentTime >= 16) {
        boton4.style.display = "none";
        boton5.style.display = "block";
        boton6.style.display = "block";
    }
    else if (video44.currentTime < 16) {
        boton4.style.display = "none";
        boton5.style.display = "none";
        boton6.style.display = "none";
    }
}

video5.ontimeupdate = function () {

    if (video5.currentTime >=23) {
        boton4.style.display = "block";
        boton5.style.display = "none";
        boton6.style.display = "block";
    }

    else if (video5.currentTime < 23) {
        boton4.style.display = "none";
        boton5.style.display = "none";
        boton6.style.display = "none";
    }
}

video6.ontimeupdate = function () {

    if (video6.currentTime >=73) {
        boton7.style.display = "block";
        boton8.style.display = "block";
        boton9.style.display = "block";
    }

    else if (video6.currentTime < 73) {
        boton7.style.display = "none";
        boton8.style.display = "none";
        boton9.style.display = "none";
    }
}

//----------------------------------videos tercera decision----------------------

video7.ontimeupdate = function () {

    if (video7.currentTime >= 23) {
        boton7.style.display = "none";
        boton8.style.display = "block";
        boton9.style.display = "block";
    }

    else if (video7.currentTime < 23) {
        boton7.style.display = "none";
        boton8.style.display = "none";
        boton9.style.display = "none";
       

    }
}

video8.ontimeupdate = function () {

    if (video8.currentTime >=26) {
        boton7.style.display = "block";
        boton8.style.display = "none";
        boton9.style.display = "block";
    }

    else if (video8.currentTime < 26) {
        boton7.style.display = "none";
        boton8.style.display = "none";
        boton9.style.display = "none";
    }
}

video9.ontimeupdate = function () {


    if (video9.currentTime >=35.5) {

        snd2.play();
        final.style.display="block";
        final.style.display="flex";
        final.style.zIndex="2";
        playerjs9.style.display = "none";
        document.getElementById("id-final-points").innerHTML= puntos + "  puntos";
    
    }

    else if (video9.currentTime < 35.5) {

    }
}

        
 


    }
}




//----------------------------------botones primera decision----------------------

function Scene1A(){
    snd.play();

    if(acumu<1){
        puntos= puntos +10;
    }
    video1.currentTime = 0;
    video1.pause();
    video3.currentTime = 0;
    video3.pause();
    video4.currentTime = 0;
    video4.pause();
    playerjs.style.display = "none";
    playerjs1.style.display = "block";
    playerjs2.style.display = "none";
    playerjs3.style.display = "none";

    video2.play();  
    acumu ++; 
    console.log(acumu);
    // puntostext=puntos;
    console.log(puntos);
    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene1B(){
    snd.play();

    if(acumu<1){
        puntos=10;
    }
 
    video1.currentTime = 0;
    video1.pause();
    video2.currentTime = 0;
    video2.pause();
    video4.currentTime = 0;
    video4.pause();
    playerjs.style.display = "none";
    playerjs1.style.display = "none";
    playerjs2.style.display = "block";
    playerjs3.style.display = "none";
    video3.play();  
    acumu ++; 
    console.log(acumu);
    // puntostext=puntos;
    console.log(puntos);
    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene1C(){
    snd.play();
    
    if(acumu<1){
        puntos=100;
    }else if(acumu===1){
        puntos=75;
    } else if(acumu>1){
        puntos=60;
    }

    video1.currentTime = 0;
    video1.pause();
    video2.currentTime = 0;
    video2.pause();
    video3.currentTime = 0;
    video3.pause();
    playerjs.style.display = "none";
    playerjs1.style.display = "none";
    playerjs2.style.display = "none";
    playerjs3.style.display = "block";
    video4.play();  
    acumu ++; 
    // console.log(acumu);
    // // puntostext=puntos;
    // console.log(puntos);
    document.getElementById("id-puntos").innerHTML= puntos;

}

// -----------------escenas segunda decision----------------------

function Scene2A(){

    snd.play();
    if(acumu2<1){
        puntos= puntos +10;
    }
 
    
    video4.currentTime = 0;
    video4.pause();
    video5.currentTime = 0;
    video5.pause();
    video6.currentTime = 0;
    video6.pause();
    // playerjs.style.display = "none";
    // playerjs1.style.display = "none";
    // playerjs2.style.display = "none";
    playerjs3.style.display = "none";

    playerjs4.style.display = "block";
    playerjs5.style.display = "none";
    playerjs6.style.display = "none";

    video44.play();  
    acumu2 ++; 
    console.log(acumu);
    // puntostext=puntos;
    console.log(puntos);
    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene2B(){
    snd.play();

    if(acumu2<1){
        puntos= puntos +10;
    }
   
    video44.currentTime = 0;
    video44.pause();
    video4.currentTime = 0;
    video4.pause();
    video6.currentTime = 0;
    video6.pause();

    playerjs3.style.display = "none";

    playerjs4.style.display = "none";
    playerjs5.style.display = "block";
    playerjs6.style.display = "none";
    video5.play();  
    acumu2 ++; 
    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene2C(){

    snd.play();
    if(acumu2<1){
        puntos=puntos + 100;
    }else if(acumu2===1){
        puntos= puntos -10 + 75;
    } else if(acumu2>1){
        puntos= puntos -10 + 60;
    }
    
    video44.currentTime = 0;
    video44.pause();
    video4.currentTime = 0;
    video4.pause();
    video5.currentTime = 0;
    video5.pause();
    playerjs3.style.display = "none";
    playerjs4.style.display = "none";
    playerjs5.style.display = "none";
    playerjs6.style.display = "block";

    video6.play();  
    acumu2 ++; 
    document.getElementById("id-puntos").innerHTML= puntos;

}

// -----------------escenas tercera decision----------------------

function Scene3A(){

    snd.play();
    if(acumu3<1){
        puntos= puntos +10;
    }


    video6.currentTime = 0;
    video6.pause();  
    video8.currentTime = 0;
    video8.pause();
    video9.currentTime = 0;
    video9.pause();

    playerjs6.style.display = "none";
    playerjs7.style.display = "block";
    playerjs8.style.display = "none";
    playerjs9.style.display = "none";

    video7.play();  
    acumu3 ++; 
    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene3B(){

    snd.play();
    if(acumu3<1){
        puntos= puntos +10;
    }
 

    video6.currentTime = 0;
    video6.pause();  
    video7.currentTime = 0;
    video7.pause();
    video9.currentTime = 0;
    video9.pause();

    playerjs6.style.display = "none";

    playerjs7.style.display = "none";
    playerjs8.style.display = "block";
    playerjs9.style.display = "none";

    video8.play();  
    acumu3 ++; 

    document.getElementById("id-puntos").innerHTML= puntos;

}

function Scene3C(){
    snd.play();

    if(acumu3<1){
        puntos=puntos + 100;
    }else if(acumu3===1){
        puntos= puntos -10 + 75;
    } else if(acumu3>1){
        puntos= puntos -10 + 60;
    }
    
    video6.currentTime = 0;
    video6.pause();  
    video7.currentTime = 0;
    video7.pause();
    video8.currentTime = 0;
    video8.pause();
    playerjs6.style.display = "none";

    playerjs7.style.display = "none";
    playerjs8.style.display = "none";
    playerjs9.style.display = "block";

    video9.play();  
    acumu3 ++; 
    document.getElementById("id-puntos").innerHTML= puntos;

}

