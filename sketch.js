let pantalla = 1;
let mapa1;
let mapa2;
let mapa3;
let personaje;
let enemigo;
let pImg;
let eImg;
let enemigos = [];
let inicioJuego = false;
let terminoJuego = false;
let nivel1_Termino = false;
let nivel2_Termino = false;
let nivel3_Termino = false;
let nivel1_Inicio = false;
let nivel2_Inicio = false;
let nivel3_Inicio = false;
let pantallaInicio=true;
let sonidoDeFondo;
var sonidoDePasos;
reproducir=false;

function preload(){
  sonidoDeFondo = loadSound('sound/sonidoDeFondo.mp3')
  sonidoDePasos = loadSound('sound/pasos.mp3')
}


function setup() {
  mapa1 = loadImage('img/mapa/1.png');
  mapa2 = loadImage('img/mapa/2.png');
  mapa3 = loadImage('img/mapa/3.png');
  pImg = loadImage('img/personaje/pj.png');
  eImg = loadImage('img/fantasma/fm.png');
  createCanvas(1280,720);
  sonidoDeFondo.setVolume(0.1);
  sonidoDePasos.setVolume(0.4);

  personaje = new Personaje;
  enemigo = new Enemigo;
  
}




function draw() {

  if (!sonidoDeFondo.isPlaying()) {
    sonidoDeFondo.play();
    
  } 
  
  
//  console.log(pantalla)
 if (pantallaInicio=true){
        inicio();
      if(keyCode===ENTER){
        nivel1_Inicio=true;
        inicioJuego=true;

      }
 }

 if(inicioJuego){
       if(keyIsPressed){
      if( key === 'w'){
        personaje.moveUp();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();
        } 
      }
      if(key === 'd'){
        personaje.moveRight();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();
        } 
      }
      if(key === 's'){
        personaje.moveDown();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();
        } 
      }
      if(key === 'a'){
        personaje.moveLeft();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();
        } 
      }   
    }
  }

  if (nivel1_Inicio){
      
      const nivel = new nivel1()
      nivel1()
      if (nivel.gane()){
        nivel1_Termino=true
        nivel2_Inicio=true
        nivel1_Inicio=false
        nivel.remove();
    }
      if(nivel.colision()){
          perder();
          inicioJuego=false
      }
  }


  // console.log(pantalla)
   
 


  
  if (nivel2_Inicio){
    const nivel = new nivel2()
    nivel2()
    if (nivel.gane()){
      nivel2_Termino=true
      nivel3_Inicio=true
      nivel2_inicio=false
      nivel.remove();
      // if(enemigosNivel1[0]===undefined){
      //   alert(enemigosNivel2.length)
      // }
      
  }
    if(nivel.colision()){
        perder();
        inicioJuego=false
    }
}



if (nivel3_Inicio){
  const nivel = new nivel3()
  nivel3()
  if (nivel.gane()){ 
    nivel3_Termino=true
    nivel.remove();
    
}
  if(nivel.colision()){
      perder();
      inicioJuego=false
  }
}
  
  // text( mouseX + "-" + mouseY, width/2, height/2);
}
