
const defaults = {
    x: rx(.5),
    y: ry(.1),
    w: rx(.9),
    h: ry(.3),
}

class Sequence {

    constructor(st) {
        this.name = 'sequencer'
        this.atoms = []
        augment(this, defaults)
        augment(this, st)

        for (let i = 0; i < 20; i++) this.growAtom()
    }

    growAtom() {
        this.atoms.push({
            x: RND(this.w),
            y: RND(this.h),
            type: RND(4),
        })
    }

    evo(dt) {
        this.atoms.forEach(a => {
            a.x += RND(-5, 5)
            a.y += RND(-5, 5)
        })
    }

    draw() {
        save()
        translate(this.x, this.y)

        this.atoms.forEach(a => {
            switch(a.type) {
            case 0: fill(.1, .4, .4); break;
            case 1: fill(.3, .4, .4); break;
            case 2: fill(.6, .4, .4); break;
            case 3: fill(.8, .4, .4); break;
            }
            circle(a.x, a.y, 15);
        })

        restore()
    }

}

