https://www.youtube.com/watch?v=alhW13-NZ4Y
let fondo; 
let link;
let ganon;
let vidaLink;
let vidaGanon;
let corazonlink1;
let corazonlink2;
let corazonlink3;
let corazonganon1;
let corazonganon2;
let corazonganon3;
let patadalink; 
let patadaganon; 
let pantallaInicio;
let musica;
let musicaIniciada = false;
let vidas = [3, 3];

let jugadorLink;
let jugadorGanon;
let juego;

function preload() {
  fondo = loadImage("imagenes/escenario.png");

  link = loadImage("imagenes/link.png");
  ganon = loadImage("imagenes/ganon.png");

  vidaLink = loadImage("imagenes/vidalink.png");
  vidaGanon = loadImage("imagenes/vidaganon.png");

  corazonlink1 = loadImage("imagenes/corazonlink1.png");
  corazonlink2 = loadImage("imagenes/corazonlink2.png");
  corazonlink3 = loadImage("imagenes/corazonlink3.png");

  corazonganon1 = loadImage("imagenes/corazonganon1.png");
  corazonganon2 = loadImage("imagenes/corazonganon2.png");
  corazonganon3 = loadImage("imagenes/corazonganon3.png");

  patadalink = loadImage("imagenes/patadalink.png");
  patadaganon = loadImage("imagenes/patadaganon.png");

  pantallaInicio = loadImage("imagenes/inicioycreditos.png");

  musica = loadSound("sonido/musicaDeFondo.mp3");
}

function setup() {
  createCanvas(800, 400);
  musica.setVolume(0.3);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.mousePresionado();

  if (juego.pantalla.estado == "juego") { 
    if (musicaIniciada == false) {
      musica.play();
      musicaIniciada = true;  
       
    }
  }
}
