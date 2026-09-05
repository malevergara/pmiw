let corriendo = [];
let saltando = [];
let fondo;
let sueloImg;

let estado = "caminar";
let frameActual = 0;

let x = -100;
let y = 475;
let tamaño = 1.5;
let suelo = 500;
let alturaPersonaje = 25;

let velocidad = 3;
let velocidadFondo = 1;
let velocidadSuelo = 6;

let velocidadSalto = 0;
let gravedad = 0.35;

let yaSalto = false;

let fondoX = 0;
let sueloX = 0;

function preload() {
  for (let i = 0; i < 20; i++) {
    corriendo[i] = loadImage("libraries/images/corriendo" + i + ".png");
  }

  for (let i = 0; i < 9; i++) {
    saltando[i] = loadImage("libraries/images/saltando" + i + ".png");
  }

  fondo = loadImage("libraries/images/fondo.png");
  sueloImg = loadImage("libraries/images/suelo.png");
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  moverEscenario();
  dibujarFondo();
  dibujarSuelo();

  if (estado == "caminar") {
    correr();
    reproducirAnimacion(corriendo, 2);
  }

  else if (estado == "salto") {
    saltar();
    reproducirSalto();
  }
}

function moverEscenario() {
  fondoX -= velocidadFondo;
  sueloX -= velocidadSuelo;

  if (fondoX <= -fondo.width) {
    fondoX = 0;
  }

  if (sueloX <= -sueloImg.width) {
    sueloX = 0;
  }
}

function dibujarFondo() {
  let alto = height;
  let ancho = fondo.width * (alto / fondo.height);

  image(fondo, fondoX + ancho / 2, height / 2, ancho, alto);
  image(fondo, fondoX + ancho + ancho / 2, height / 2, ancho, alto);
}

function dibujarSuelo() {
  image(sueloImg, sueloX + sueloImg.width / 2, suelo + 100);
  image(sueloImg, sueloX + sueloImg.width + sueloImg.width / 2, suelo + 100);
}

function correr() {
  x += velocidad;

  if (x >= width * 0.42 && !yaSalto) {
    estado = "salto";
    velocidadSalto = -10;
    yaSalto = true;
    frameActual = 0;
  }

  if (x > width + 100) {
    x = -100;
    y = suelo - alturaPersonaje;
    yaSalto = false;
    estado = "caminar";
    frameActual = 0;
  }
}

function saltar() {
  x += velocidad;

  y += velocidadSalto;
  velocidadSalto += gravedad;

  if (y >= suelo - alturaPersonaje) {
    y = suelo - alturaPersonaje;
    estado = "caminar";
    yaSalto = false;
    frameActual = 0;
  }

  if (x > width + 100) {
    x = -100;
    y = suelo - alturaPersonaje;
    yaSalto = false;
    estado = "caminar";
    frameActual = 0;
  }
}

function reproducirSalto() {
  if (velocidadSalto < 0) {
    if (frameCount % 8  == 0 && frameActual < 3) {
      frameActual++;
    }
  }

  else {
    if (frameCount % 4 == 0 && frameActual < 8) {
      frameActual++;
    }
  }

  image(saltando[frameActual], x, y, 72 * tamaño, 61 * tamaño);
}

function reproducirAnimacion(frames, velocidad) {
  if (frameCount % velocidad == 0) {
    frameActual++;

    if (frameActual >= frames.length) {
      frameActual = 0;
    }
  }

  image(frames[frameActual], x, y, 72 * tamaño, 61 * tamaño);
}
