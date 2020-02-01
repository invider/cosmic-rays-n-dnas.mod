const BORDER = rx(.05)

class Nanobot {
    
    constructor() {
        this.Z = 11
        this.name = 'nanobot'
        this.r = ry(.04),
        this.x = rx(.5),
        this.y = ry(1) - this.r,
        this.color = hsl(.55, .4, .4)
    }

    evo(dt) {
        this.x = limit(mouse.x,
            this.r + BORDER,
            rx(1) - this.r - BORDER)
    }

    draw() {
        const { x, y, r } = this

        blocky()
        image(res.sprites.bot, x-r, y-r, 2*r, 2*r)
        /*
        fill(this.color)
        rect(x-r, y-r, 2*r, 2*r)

        lineWidth(4)
        stroke(this.color)
        line(x, y-r, x, y-r*1.5)
        */
    }
}
