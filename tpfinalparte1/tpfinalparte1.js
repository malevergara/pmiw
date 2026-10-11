let pantallaActual = 1; 
let musicaZelda;
let fondo = [];

let pantallas = [ // lista (arreglo)   
  {//1 
    titulo: "Prólogo",
    descripcion: "Hyrule está en peligro. Ganon ha robado la Trifuerza y la princesa Zelda ha desaparecido."
  },
  
  {//2
    titulo: "El comienzo",
    descripcion: "Link se despierta en su casa y encuentra una carta de Zelda y un mapa. Emprende viaje."
  },

  {//3
    titulo: "El anciano",
    descripcion: "Un sabio le habla sobre las tres reliquias que pueden detener a Ganon."
  },

  {//4
    titulo: "¿Qué camino elegís?",
    descripcion: "Link debe decidir qué camino tomar para continuar su aventura."
  },

  {//5
    titulo: "El Bosque Perdido",
    descripcion: "El bosque está lleno de niebla. Aparece una hada llamada Navi."
  },

  {//6
    titulo: "La Montaña de Fuego",
    descripcion: "Un Goron intenta mover una roca gigante que bloquea el paso."
  },

  {//7
    titulo: "¿Confiás en Navi?",
    descripcion: "Navi le ofrece a Link su ayuda para atravesar el bosque. ¿Decidirá confiar en ella?"
  },

  {//8
    titulo: "¿Qué haces?",
    descripcion: "El Goron necesita ayuda para despejar el camino. Link debe decidir qué hacer."
  },

  {//9
    titulo: "El Lago Sagrado",
    descripcion: "Navi te lleva a un lago oculto. Obtenes la Reliquia de valor"
  },

  {//10
    titulo: "La Trampa",
    descripcion: "Te perdes en un laberinto. Perdes una vida logras salir del bosque en estado critico"
  },

  {//11
    titulo: "La Amistad",
    descripcion: "El gordon te agradece y te entrega la reliquia de fuerza."
  },

  {//12
    titulo: "La Erupción",
    descripcion: "La montaña entra en erupción. Logras escapar pero llegas herido al valle"
  },
  {//13
    titulo: "Salida del bosque",
    descripcion: "Despues de mucho tiempo, por fin encontras un camino que conduce al Templo del tiempo."
  },
  {//14
    titulo: "El rescate",
    descripcion: "Liberas a Zelda. Te entrega la ultima reliquia y enfrentan a Ganon."
  },
  {//15
    titulo: "Final Heroico",
    descripcion: "Juntos derrotan a Ganon. La trifuerza restaura y Hyrule vuelve a la paz. “La luz siempre vence”."
  },
  {//16
    titulo: "El templo del tiempo",
    descripcion: "Las puertas se abren. Ahi esta Zelda pero sentis una presencia oscura, Ganon aparece."
  },
  { //17
    titulo: "¿Qué haces?",
    descripcion: ""
  },
  //pantalla 18
  {
    titulo: "Heroe solitario",
    descripcion: "Te lanzas solo a la pelea sin esperar ayuda."
  },
  //pantalla 19
  {
    titulo: "Derrota",
    descripcion: "Ganon consigue vencerte y atrapaparte pero Zelda logra escapa."
  },
  //pantalla 20
  {
    titulo: "El prisionero",
    descripcion: "Quedas prisionero, encerrado en las profundidades del castillo oscuro. Zelda debera buscar la forma de ayudarte."
  },
  //pantalla 21
  {
    titulo: "El valle",
    descripcion: "Encontras un puente muy antiguo que conduce al templo del tiempo."
  },
  //pantalla 22
  {
    titulo: "La persecución",
    descripcion: "Ganon huye hacia el Castillo oscuro."
  },
   //pantalla 23
  {
    titulo: "Castillo Oscuro",
    descripcion: "Llegas al salon del trono. Ganon absorbe el poder de la trifuerza."
  },
  //pantalla 24
  {
    titulo: "La Oscuridad",
    descripcion: "Hyrule cae en la oscuridad. y tu valentia no fue suficiente."
  },
   //pantalla 25
  {
    titulo: "Final Oscuro",
    descripcion: "Ganon gana, condena a Hyrule a la oscuridad eterna y a Zelda como su prisionera. Link es encerrado."
  },
];

function preload() {
  musicaZelda = loadSound('libraries/sonidos/musicaDeFondo.mp3'); 
  
  for (let i = 0; i < 26; i++) {  //la linea se cicla 26 veces para cargar todas las imagenes
    fondo[i] = loadImage(`libraries/imagenes/${i}.png`); 
  }
  
}
function setup() {
  createCanvas(800, 450);
  musicaZelda.setVolume(0.2);
}

function draw() {
  background(20);

  let pantalla = pantallas[pantallaActual - 1];

  image(fondo[pantallaActual], 0, 0, 800, 450);

 //fondito para q los textos sean mas legibles
  fill(0, 170);
  noStroke();
  rect(100, 15, 600, 130, 10);
  rect(70, 145, 660, 100, 10);

  fill(255);
  textAlign(CENTER);

  textSize(14);
  text("PANTALLA " + pantallaActual, width / 2, 40);

  textSize(32);
  text(pantalla.titulo, width / 2, 100);

  textSize(18);
  textAlign(CENTER);
  text(pantalla.descripcion, 80, 160, 640, 150);

  if (pantallaActual == 4) {
    boton(100, 350, 250, 50, "Entrar al Bosque Perdido");  //llamo a la funcion boton 2 veces
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


function boton(x, y, ancho, alto, texto) {  //creo la funcion boton
  let hover = mouseX > x && mouseX < x + ancho &&
              mouseY > y && mouseY < y + alto;    //mini calculo para determinar el hover del boton

  let escala = hover ? 1.05 : 1;
  let colorBoton = hover ? 100 : 60;

  push();
  translate(x + ancho / 2, y + alto / 2);
  scale(escala);

  fill(colorBoton);
  stroke(hover ? 255 : 150);
  strokeWeight(hover ? 2 : 1);
  rect(-ancho / 2, -alto / 2, ancho, alto, 10);  //dibujo el boton

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, 0, 0);

  pop();
}


function mousePressed() {
 if (!musicaZelda.isPlaying()) { //cuando apretas click arranca la musica
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
else if (pantallaActual == 9) {
    pantallaActual = 13;
  }
  else if (pantallaActual == 13) {
    pantallaActual = 14;
  }
   else if (pantallaActual == 14) {
    pantallaActual = 15;
  }
   else if (pantallaActual == 10) {
    pantallaActual = 16;
  }
  else if (pantallaActual == 16) {
    pantallaActual = 17;
  }
  else if (pantallaActual == 18) {
    pantallaActual = 19;
  }
   else if (pantallaActual == 19) {
    pantallaActual = 20;
  }
  else if (pantallaActual == 11 || pantallaActual == 12) {
    pantallaActual = 21;
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
  else if (pantallaActual == 17) {

    if (mouseX > 100 && mouseX < 350 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 18;
    }

    if (mouseX > 450 && mouseX < 700 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 21;
    }
  }
  else if (pantallaActual == 4) {

    if (mouseX > 100 && mouseX < 350 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 5;
    }

    if (mouseX > 450 && mouseX < 700 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 6;
    }
  }
  else if (pantallaActual == 21) {

    if (mouseX > 100 && mouseX < 350 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 18;
    }

    if (mouseX > 450 && mouseX < 700 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 22;
    }
  }

  else if (pantallaActual == 5) {
    pantallaActual = 7;
  }

  else if (pantallaActual == 6) {
    pantallaActual = 8;
  }

  else if (pantallaActual == 7) {

    if (mouseX > 100 && mouseX < 350 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 9;
    }

    if (mouseX > 450 && mouseX < 700 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 10;
    }
  }

  else if (pantallaActual == 8) {

    if (mouseX > 100 && mouseX < 350 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 11;
    }

    if (mouseX > 450 && mouseX < 700 &&
        mouseY > 350 && mouseY < 400) {
      pantallaActual = 12;
    }
  }
}
