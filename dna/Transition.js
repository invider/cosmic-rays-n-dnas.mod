const HIDDEN = 0
const FADE_IN = 1
const KEEP = 2
const FADE_OUT = 3

class Transition {
  state = HIDDEN;
  fader = 1;

  constructor(st) {
    augment(this, st);
    setTimeout(
      () => {
        this.transit();
      }, this.startIn
    );
  }

  transit() {
    this.state = FADE_IN;
    this.fader = 1;
  }

  evo(dt) {
    if (this.state === HIDDEN) return;

    this.fader = this.fader - dt / this.time;

    if (this.fader <= 0) {
      this.fader = 1;
      if (this.state === FADE_OUT) {
        this.state = HIDDEN;
      } else {
        this.state = this.state + 1;
      }
    }
  }

  draw() {
    if (this.state === HIDDEN) return;
    save()
    switch (this.state) {
      case FADE_IN:
        alpha(1 - this.fader);
        break;
      case KEEP:
        alpha(1);
        break;
      case FADE_OUT:
        alpha(this.fader);
        break;
    }
    background(this.backgroundImage)
    restore()
  }
}