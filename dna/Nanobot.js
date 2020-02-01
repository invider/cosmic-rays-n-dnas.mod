class Nanobot {
    
    constructor(st) {
        this.Z = 11
        this.name = 'nanobot'
        this.r = 16,
        this.x = 0
        this.y = 0,
            
        this.w = res.sprites.bot.width
        this.h = res.sprites.bot.height
        augment(this, st)
    }

    init() {
        this.x = this.__.rx(.5)
        this.y = this.__.ry(1) - this.h/2
    }

    shot() {
        log('shooting')
        $.cosmos.spawn(dna.Nucleo, {
            Z: this.Z + 1,
            x: this.x,
            y: this.y,
            dx: 0,
            dy: -env.tune.shotSpeed,
        })
    }

    evo(dt) {
        const edge = env.tune.border + this.w/2
        this.x = limit($.cosmos.worldX(mouse.x),
            edge, $.cosmos.rx(1) - edge)
    }
    
    draw() {
        const { x, y, w, h } = this

        blocky()
        image(res.sprites.bot, x-w/2, y-h/2, w, h)

        /*
        stroke('#ffff00')
        lineWidth(1)
        rect(x-w/2, y-h/2, w, h)
        */
    }
}
