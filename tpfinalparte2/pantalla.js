class Pantalla {
  constructor() {
    this.estado = "inicio";
  }

  dibujarInicio() {
    image(pantallaInicio, 0, 0, 800, 400);
  }

  dibujarVictoria() {
    background(0);

    fill(255, 215, 130);
    textAlign(CENTER);
    textSize(42);
    text("LINK GANA", 400, 145);

    fill(255);
    textSize(22);
    text("¡Link salvó Hyrule!", 400, 205);

    this.dibujarBoton();
  }

  dibujarDerrota() {
    background(0);

    fill(255, 100, 80);
    textAlign(CENTER);
    textSize(42);
    text("GANON GANA", 400, 145);

    fill(255);
    textSize(22);
    text("Ganon conquistó Hyrule", 400, 205);

    this.dibujarBoton();
  }

  dibujarBoton() {
    fill(0);
    rect(300, 290, 200, 50);

    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("REINICIAR", 400, 322);
  }

  mousePresionado() {
    if (this.estado == "inicio") {
      if (mouseX > 250 && mouseX < 610) {
        if (mouseY > 295 && mouseY < 370) {
          this.estado = "juego";
        }
      }
    }

    if (this.estado == "victoria" || this.estado == "derrota") {
      if (mouseX > 300 && mouseX < 500) {
        if (mouseY > 290 && mouseY < 340) {
          this.estado = "juego";
        }
      }
    }
  }
}
