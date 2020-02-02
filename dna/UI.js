class UI extends dna.hud.Container {

  constructor(st) {
      super()
      this.name = 'ui'
      this.x = 0
      this.y = 0
      this.z = 1;
      this.w = $.cosmos.rx(1)
      this.h = $.cosmos.ry(1)
      this.isShown = true;
  }

  init() {
      log('setting up ui')
      this.spawn('hud/gadget/ImageButton', {
          name: 'newGame',
          img: res.ui.start,
          scale: 2,
          x: $.cosmos.rx(.5) - res.ui.start.width / 2,
          y: $.cosmos.ry(.7),

          onClick: () => {
              this.Z = -1;
              if (this.isShown) {
                  trap('start')
              }
              this.isShown = false;
          }
      })
  }

  evo(dt) {
  }

  drawBackground() {
      if (!this.isShown) return;
      image(res.backgrounds.start_background,
              0, 0, this.w, this.h);
  }

  draw() {
      if (!this.isShown) return;
      super.draw()
  }
}
