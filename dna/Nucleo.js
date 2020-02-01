const defaults = {
    x: 0,
    y: 0,
    w: 12,
    h: 12,
}

class Nucleo {
    
    constructor(st) {
        augment(this, defaults)
        augment(this, st)
    }

    evo(dt) {
        this.x += this.dx * dt
        this.y += this.dy * dt
    }

    draw() {
        const { x, y, w, h } = this

        blocky()
        image(res.sprites.atom_red, x-w/2, y-w/2, w, h);
    }

}
