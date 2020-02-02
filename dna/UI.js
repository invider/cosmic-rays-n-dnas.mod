class UI extends dna.hud.Container {

  constructor(st) {
      super()
      this.name = 'ui'
      this.x = 0
      this.y = 0
      this.w = $.cosmos.rx(1)
      this.h = $.cosmos.ry(1)
  }

  init() {
      log('setting up ui')
      this.spawn('hud/gadget/ImageButton', {
          name: 'newGame',
          img: res.ui.start,
          scale: 2,
          x: $.cosmos.rx(.5),
          y: $.cosmos.ry(.5),

          onClick: function() {
              log('click')
          }
      })
  }

  evo(dt) {
  }

  drawBackground() {
      image(res.backgrounds.start_background,
              0, 0, this.w, this.h)
      //fill('404040')
      //rect(0, 0, this.w, this.h)
      //background(res.backgrounds.start_background)
  }

  draw() {
      super.draw()
  }
}
