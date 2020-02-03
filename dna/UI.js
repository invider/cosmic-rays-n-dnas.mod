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
      const button = this.spawn('hud/gadget/ImageButton', {
          name: 'newGame',
          scale: 1,
          x: $.cosmos.rx(.5) - res.ui.start.width/2,
          y: $.cosmos.ry(.7),

          onClick: () => {
              if (this.isShown) {
                  trap('start')
              }
              this.__.detach(this)
              sfx(res.sfx.select)
          }
      })
      button.base = res.ui.start
      button.adjust()
  }

  evo(dt) {
  }

  drawBackground() {
      blocky();
      image(res.backgrounds.start_background,
              0, 0, this.w, this.h);
  }

  draw() {
      super.draw()
  }
}
