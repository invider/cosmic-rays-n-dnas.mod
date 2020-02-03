let ZZ = 11

class Nanobot {

    constructor(st) {
        this.Z = 1000000
        this.name = 'nanobot'
        this.x = 0
        this.y = 0

        this.w = res.sprites.bot.width
        this.h = res.sprites.bot.height
        augment(this, st)
    }

    init() {
        this.x = this.__.rx(.5)
        this.y = this.__.ry(1) - this.h / 2
        this.prepareNextShot()
    }

    shot() {
        this.nextShot.dy = -env.tune.shotSpeed;
        this.prepareNextShot();
        sfx(res.sfx.shot)
    }

    evo() {
        const edge = env.tune.border + this.w / 2
        this.x = limit($.cosmos.worldX(mouse.x),
            edge, $.cosmos.rx(1) - edge)
        this.nextShot.x = this.x
    }

    prepareNextShot() {
        
        this.nextShot = $.DNA.spawn(dna.Nucleo, {
            Z: ZZ + 1,
            x: $.DNA.lx(this.x),
            y: $.DNA.ly(this.y) - 8,
            //x: 0,
            //y: 100,
            dx: 0,
            dy: 0,
            typeDef: lib.util.getRandomNucleoColor(),
        })
    }

    draw() {
        const { x, y, w, h } = this

        blocky()
        image(res.sprites.bot, x - w / 2, y - h / 2, w, h)

        /*
        stroke('#ffff00')
        lineWidth(1)
        rect(x-w/2, y-h/2, w, h)
        */
    }
}
