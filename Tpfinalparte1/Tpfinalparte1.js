let pantallaActual = 1;
let musicaZelda;

let imagen0;
let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen6;
let imagen7;
let imagen8;
let imagen9;
let imagen10;
let imagen11;
let imagen12;
let imagen13;
let imagen14;
let imagen15;
let imagen16;
let imagen17;
let imagen18;
let imagen19;
let imagen20;
let imagen21;
let imagen22;
let imagen23;
let imagen24;
let imagen25;

let pantallas = [
{
  titulo: "Prólogo",
  descripcion: "Hyrule está en peligro. Ganon ha robado la Trifuerza y la princesa Zelda ha desaparecido."
},
{
  titulo: "El comienzo",
  descripcion: "Link se despierta en su casa y encuentra una carta de Zelda y un mapa. Emprende viaje."
},
{
  titulo: "El anciano",
  descripcion: "Un sabio le habla sobre las tres reliquias que pueden detener a Ganon."
},
{
  titulo: "¿Qué camino elegís?",
  descripcion: "Link debe decidir qué camino tomar para continuar su aventura."
},
{
  titulo: "El Bosque Perdido",
  descripcion: "El bosque está lleno de niebla. Aparece una hada llamada Navi."
},
{
  titulo: "La Montaña de Fuego",
  descripcion: "Un Goron intenta mover una roca gigante que bloquea el paso."
},
{
  titulo: "¿Confiás en Navi?",
  descripcion: "Navi le ofrece a Link su ayuda para atravesar el bosque. ¿Decidirá confiar en ella?"
},
{
  titulo: "¿Qué haces?",
  descripcion: "El Goron necesita ayuda para despejar el camino. Link debe decidir qué hacer."
},
{
  titulo: "El Lago Sagrado",
  descripcion: "Navi te lleva a un lago oculto. Obtenes la Reliquia de valor"
},
{
  titulo: "La Trampa",
  descripcion: "Te perdes en un laberinto. Perdes una vida logras salir del bosque en estado critico"
},
{
  titulo: "La Amistad",
  descripcion: "El gordon te agradece y te entrega la reliquia de fuerza."
},
{
  titulo: "La Erupción",
  descripcion: "La montaña entra en erupción. Logras escapar pero llegas herido al valle"
},
{
  titulo: "Salida del bosque",
  descripcion: "Despues de mucho tiempo, por fin encontras un camino que conduce al Templo del tiempo."
},
{
  titulo: "El rescate",
  descripcion: "Liberas a Zelda. Te entrega la ultima reliquia y enfrentan a Ganon."
},
{
  titulo: "Final Heroico",
  descripcion: "Juntos derrotan a Ganon. La trifuerza restaura y Hyrule vuelve a la paz. “La luz siempre vence”."
},
{
  titulo: "El templo del tiempo",
  descripcion: "Las puertas se abren. Ahi esta Zelda pero sentis una presencia oscura, Ganon aparece."
},
{
  titulo: "¿Qué haces?",
  descripcion: ""
},
{
  titulo: "Heroe solitario",
  descripcion: "Te lanzas solo a la pelea sin esperar ayuda."
},
{
  titulo: "Derrota",
  descripcion: "Ganon consigue vencerte y atrapaparte pero Zelda logra escapa."
},
{
  titulo: "El prisionero",
  descripcion: "Quedas prisionero, encerrado en las profundidades del castillo oscuro. Zelda debera buscar la forma de ayudarte."
},
{
  titulo: "El valle",
  descripcion: "Encontras un puente muy antiguo que conduce al templo del tiempo."
},
{
  titulo: "La persecución",
  descripcion: "Ganon huye hacia el Castillo oscuro."
},
{
  titulo: "Castillo Oscuro",
  descripcion: "Llegas al salon del trono. Ganon absorbe el poder de la trifuerza."
},
{
  titulo: "La Oscuridad",
  descripcion: "Hyrule cae en la oscuridad. y tu valentia no fue suficiente."
},
{
  titulo: "Final Oscuro",
  descripcion: "Ganon gana, condena a Hyrule a la oscuridad eterna y a Zelda como su prisionera. Link es encerrado."
}
];

function preload() {

  musicaZelda = loadSound("libraries/sonido/musicaDeFondo.mp3");

  imagen0 = loadImage("libraries/imagenes/0.png");
  imagen1 = loadImage("libraries/imagenes/1.png");
  imagen2 = loadImage("libraries/imagenes/2.png");
  imagen3 = loadImage("libraries/imagenes/3.png");
  imagen4 = loadImage("libraries/imagenes/4.png");
  imagen5 = loadImage("libraries/imagenes/5.png");
  imagen6 = loadImage("libraries/imagenes/6.png");
  imagen7 = loadImage("libraries/imagenes/7.png");
  imagen8 = loadImage("libraries/imagenes/8.png");
  imagen9 = loadImage("libraries/imagenes/9.png");
  imagen10 = loadImage("libraries/imagenes/10.png");
  imagen11 = loadImage("libraries/imagenes/11.png");
  imagen12 = loadImage("libraries/imagenes/12.png");
  imagen13 = loadImage("libraries/imagenes/13.png");
  imagen14 = loadImage("libraries/imagenes/14.png");
  imagen15 = loadImage("libraries/imagenes/15.png");
  imagen16 = loadImage("libraries/imagenes/16.png");
  imagen17 = loadImage("libraries/imagenes/17.png");
  imagen18 = loadImage("libraries/imagenes/18.png");
  imagen19 = loadImage("libraries/imagenes/19.png");
  imagen20 = loadImage("libraries/imagenes/20.png");
  imagen21 = loadImage("libraries/imagenes/21.png");
  imagen22 = loadImage("libraries/imagenes/22.png");
  imagen23 = loadImage("libraries/imagenes/23.png");
  imagen24 = loadImage("libraries/imagenes/24.png");
  imagen25 = loadImage("libraries/imagenes/25.png");
}

function setup() {
  createCanvas(800, 450);
  musicaZelda.setVolume(0.2);
}

function draw() {
  background(20);

  if (pantallaActual == 1) {
    image(imagen1, 0, 0, 800, 450);
  }
  else if (pantallaActual == 2) {
    image(imagen2, 0, 0, 800, 450);
  }
  else if (pantallaActual == 3) {
    image(imagen3, 0, 0, 800, 450);
  }
  else if (pantallaActual == 4) {
    image(imagen4, 0, 0, 800, 450);
  }
  else if (pantallaActual == 5) {
    image(imagen5, 0, 0, 800, 450);
  }
  else if (pantallaActual == 6) {
    image(imagen6, 0, 0, 800, 450);
  }
  else if (pantallaActual == 7) {
    image(imagen7, 0, 0, 800, 450);
  }
  else if (pantallaActual == 8) {
    image(imagen8, 0, 0, 800, 450);
  }
  else if (pantallaActual == 9) {
    image(imagen9, 0, 0, 800, 450);
  }
  else if (pantallaActual == 10) {
    image(imagen10, 0, 0, 800, 450);
  }
  else if (pantallaActual == 11) {
    image(imagen11, 0, 0, 800, 450);
  }
  else if (pantallaActual == 12) {
    image(imagen12, 0, 0, 800, 450);
  }
  else if (pantallaActual == 13) {
    image(imagen13, 0, 0, 800, 450);
  }
  else if (pantallaActual == 14) {
    image(imagen14, 0, 0, 800, 450);
  }
  else if (pantallaActual == 15) {
    image(imagen15, 0, 0, 800, 450);
  }
  else if (pantallaActual == 16) {
    image(imagen16, 0, 0, 800, 450);
  }
  else if (pantallaActual == 17) {
    image(imagen17, 0, 0, 800, 450);
  }
  else if (pantallaActual == 18) {
    image(imagen18, 0, 0, 800, 450);
  }
  else if (pantallaActual == 19) {
    image(imagen19, 0, 0, 800, 450);
  }
  else if (pantallaActual == 20) {
    image(imagen20, 0, 0, 800, 450);
  }
  else if (pantallaActual == 21) {
    image(imagen21, 0, 0, 800, 450);
  }
  else if (pantallaActual == 22) {
    image(imagen22, 0, 0, 800, 450);
  }
  else if (pantallaActual == 23) {
    image(imagen23, 0, 0, 800, 450);
  }
  else if (pantallaActual == 24) {
    image(imagen24, 0, 0, 800, 450);
  }
  else if (pantallaActual == 25) {
    image(imagen25, 0, 0, 800, 450);
  }

  let pantalla = pantallas[pantallaActual - 1];

  fill(0, 170);
  noStroke();
  rect(100, 15, 600, 130, 10);
  rect(70, 145, 660, 100, 10);

  fill(255);
  textAlign(CENTER);

  textSize(14);
  text("PANTALLA " + pantallaActual, 400, 40);

  textSize(32);
  text(pantalla.titulo, 400, 100);

  textSize(18);
  text(pantalla.descripcion, 80, 160, 640, 150);

  if (pantallaActual == 4) {
    boton(100, 350, 250, 50, "Entrar al Bosque Perdido");
    boton(450, 350, 250, 50, "Ir a la Montaña de Fuego");
  }

  if (pantallaActual == 7) {
    boton(100, 350, 250, 50, "Sí, confío en Navi");
    boton(450, 350, 250, 50, "No, no confío");
  }

  if (pantallaActual == 8) {
    boton(100, 350, 250, 50, "Ayudar al Goron");
    boton(450, 350, 250, 50, "Robar los explosivos");
  }

  if (pantallaActual == 17) {
    boton(100, 350, 250, 50, "Atacar solo");
    boton(450, 350, 250, 50, "Perseguir a Ganon");
  }

  if (pantallaActual == 21) {
    boton(100, 350, 250, 50, "Atacar solo");
    boton(450, 350, 250, 50, "Perseguir a Ganon");
  }
}

function boton(x, y, ancho, alto, textoBoton) {
  fill(100);
  noStroke();
  rect(x, y, ancho, alto);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(textoBoton, x + ancho / 2, y + alto / 2);
}

function mousePressed() {

  if (!musicaZelda.isPlaying()) {
    musicaZelda.loop();
  }

  if (pantallaActual == 1) {
    pantallaActual = 2;
  }
  else if (pantallaActual == 2) {
    pantallaActual = 3;
  }
  else if (pantallaActual == 3) {
    pantallaActual = 4;
  }

  else if (pantallaActual == 4) {
    if (mouseX > 100 && mouseX < 350) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 5;
      }
    }

    if (mouseX > 450 && mouseX < 700) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 6;
      }
    }
  }

  else if (pantallaActual == 5) {
    pantallaActual = 7;
  }
  else if (pantallaActual == 6) {
    pantallaActual = 8;
  }

  else if (pantallaActual == 7) {
    if (mouseX > 100 && mouseX < 350) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 9;
      }
    }

    if (mouseX > 450 && mouseX < 700) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 10;
      }
    }
  }

  else if (pantallaActual == 8) {
    if (mouseX > 100 && mouseX < 350) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 11;
      }
    }

    if (mouseX > 450 && mouseX < 700) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 12;
      }
    }
  }

  else if (pantallaActual == 9) {
    pantallaActual = 13;
  }
  else if (pantallaActual == 10) {
    pantallaActual = 16;
  }
  else if (pantallaActual == 11) {
    pantallaActual = 21;
  }
  else if (pantallaActual == 12) {
    pantallaActual = 21;
  }
  else if (pantallaActual == 13) {
    pantallaActual = 14;
  }
  else if (pantallaActual == 14) {
    pantallaActual = 15;
  }
  else if (pantallaActual == 16) {
    pantallaActual = 17;
  }

  else if (pantallaActual == 17) {
    if (mouseX > 100 && mouseX < 350) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 18;
      }
    }

    if (mouseX > 450 && mouseX < 700) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 21;
      }
    }
  }

  else if (pantallaActual == 18) {
    pantallaActual = 19;
  }
  else if (pantallaActual == 19) {
    pantallaActual = 20;
  }

  else if (pantallaActual == 21) {
    if (mouseX > 100 && mouseX < 350) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 18;
      }
    }

    if (mouseX > 450 && mouseX < 700) {
      if (mouseY > 350 && mouseY < 400) {
        pantallaActual = 22;
      }
    }
  }

  else if (pantallaActual == 22) {
    pantallaActual = 23;
  }
  else if (pantallaActual == 23) {
    pantallaActual = 24;
  }
  else if (pantallaActual == 24) {
    pantallaActual = 25;
  }
}
