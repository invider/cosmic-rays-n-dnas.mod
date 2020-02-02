
class Monitor {

    constructor(st) {
        this.Z = 11
        this.name = 'monitor'
        augment(this, st)
    }

    draw() {
        const screen = mod['creature-buf']

        const w = env.style.monitorWidth
        const h = env.style.monitorHeight
        //const hb = $.cosmos.rx(.5) - w/2 // middle
        const hb = 5 // left
        const vb = 5
        blocky()
        image(screen.ctx.canvas, hb, vb, w, h)
    }
}
