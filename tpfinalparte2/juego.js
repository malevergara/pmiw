class Juego {
  constructor() {
    this.pantalla = new Pantalla();
    this.estadoAnterior = "inicio";
    this.crearJugadores();
  }

  crearJugadores() {
    jugadorLink = new Link();
    jugadorGanon = new Ganon();

    vidas[0] = 3;
    vidas[1] = 3;
  }

  dibujar() {
    if (this.pantalla.estado == "inicio") {
      this.pantalla.dibujarInicio();
    }

    if (this.pantalla.estado == "juego") {
      if (this.estadoAnterior != "juego") {
        this.crearJugadores();
      }

      this.dibujarCombate();

      if (vidas[1] <= 0) {
        this.pantalla.estado = "victoria";
      } else if (vidas[0] <= 0) {
        this.pantalla.estado = "derrota";
      }
    }

    if (this.pantalla.estado == "victoria") {
      this.pantalla.dibujarVictoria();
    }

    if (this.pantalla.estado == "derrota") {
      this.pantalla.dibujarDerrota();
    }

    this.estadoAnterior = this.pantalla.estado;
  }

  dibujarCombate() {
    image(fondo, 0, 0, 800, 400);

    vidas[0] = jugadorLink.vidas;
    vidas[1] = jugadorGanon.vidas;

    image(vidaLink, 20, 5, 200, 60);

    if (vidas[0] >= 1) {
      image(corazonlink1, 55, 55, 50, 30);
    }

    if (vidas[0] >= 2) {
      image(corazonlink2, 100, 55, 50, 30);
    }

    if (vidas[0] >= 3) {
      image(corazonlink3, 145, 55, 50, 30);
    }

    image(vidaGanon, 600, 5, 200, 60);

    if (vidas[1] >= 1) {
      image(corazonganon1, 625, 55, 50, 30);
    }

    if (vidas[1] >= 2) {
      image(corazonganon2, 660, 55, 50, 30);
    }

    if (vidas[1] >= 3) {
      image(corazonganon3, 695, 55, 50, 30);
    }

    jugadorLink.dibujar();
    jugadorGanon.dibujar();
  }

  mousePresionado() {
    this.pantalla.mousePresionado();
  }
}
