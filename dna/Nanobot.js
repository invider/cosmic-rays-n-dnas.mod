class Nanobot {

    constructor(st) {
        this.Z = 11
        this.name = 'nanobot'
        this.r = 16
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
    }

    evo() {
        const edge = env.tune.border + this.w / 2
        this.x = limit($.cosmos.worldX(mouse.x),
            edge, $.cosmos.rx(1) - edge)
        this.nextShot.x = this.x
    }

    prepareNextShot() {
        this.nextShot = $.cosmos.spawn(dna.Nucleo, {
            Z: this.Z + 1,
            x: this.x,
            y: this.y,
            dx: 0,
            dy: 0,
            image: this.getNextNucleoColor()[0]
        })
    }

    getNextNucleoColor() {
        const colors = Object.keys(env.tune.nucleoColors);
        const randomColor = RND(0, colors.length - 1);
        return env.tune.nucleoColors[colors[randomColor]];
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
