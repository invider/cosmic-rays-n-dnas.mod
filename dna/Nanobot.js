class Nanobot {
    
    constructor(st) {
        this.Z = 11
        this.name = 'nanobot'
        this.r = 32,
        this.x = 0
        this.y = 0,

        augment(this, st)
    }

    evo(dt) {
        /*
        this.x = limit(mouse.x,
            this.r + env.tune.border,
            rx(1) - this.r - env.tune.border)
        */
    }
    
    draw() {
        const { x, y, r } = this

        blocky()
        image(res.sprites.bot, x-r, y-r, 2*r, 2*r)
    }
}
