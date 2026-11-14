class Link {
  constructor() {
    this.posX = 100;
    this.posY = 155;
    this.vidas = 3;
    this.vivo = true;
    this.atacando = false;
  }

  mover() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += 5;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= 5;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }

    if (this.posX > 500) {
      this.posX = 500;
    }
  }

  atacar() {
    if (keyIsDown(UP_ARROW)) {
      if (!this.atacando) {
        if (dist(
          this.posX + 150,
          this.posY + 100,
          jugadorGanon.posX + 110,
          jugadorGanon.posY + 84
        ) < 140) {
          jugadorGanon.recibirGolpe();
        }

        this.atacando = true;
      }
    } else {
      this.atacando = false;
    }
  }

  recibirGolpe() {
    if (this.vivo) {
      this.vidas--;

      if (this.vidas == 0) {
        this.vivo = false;
      }
    }
  }

  dibujar() {
    if (this.vivo) {
      if (keyIsDown(UP_ARROW)) {
        image(patadalink, this.posX, this.posY, 300, 195);
      } else {
        image(link, this.posX, this.posY, 300, 195);
      }

      this.mover();
      this.atacar();
    }
  }
}
