
class Nanobot {
    
    constructor() {
        this.Z = 11
        this.name = 'nanobot'
        this.x = rx(.5),
        this.y = ry(.9),
        this.r = ry(.025),
        this.color = hsl(.55, .4, .4)
    }

    evo(dt) {
        this.x = limit(mouse.x, 0, width())
    }

    draw() {
        const { x, y, r } = this

        fill(this.color)
        rect(x-r, y-r, 2*r, 2*r)

        lineWidth(4)
        stroke(this.color)
        line(x, y-r, x, y-r*1.5)
    }
}
