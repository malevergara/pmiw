class Ganon {
  constructor() {
    this.posX = 550;
    this.posY = 170;
    this.vidas = 3;
    this.vivo = true;
    this.atacando = false;
  }

  mover() {
    if (keyIsPressed && key == 'd') {
      this.posX += 5;
    }

    if (keyIsPressed && key == 'a') {
      this.posX -= 5;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }

    if (this.posX > 580) {
      this.posX = 580;
    }
  }

  atacar() {
    if (keyIsPressed && key == 'w') {
      if (!this.atacando) {
        if (dist(
          this.posX + 110,
          this.posY + 84,
          jugadorLink.posX + 150,
          jugadorLink.posY + 100
        ) < 200) {
          jugadorLink.recibirGolpe();
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
      if (keyIsPressed && key == 'w') {
        image(patadaganon, this.posX, this.posY, 220, 168);
      } else {
        image(ganon, this.posX, this.posY, 220, 168);
      }

      this.mover();
      this.atacar();
    }
  }
}
