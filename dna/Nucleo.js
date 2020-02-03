// 
// nucleo-bullet
//
const defaults = {
    x: 0,
    y: 0,
    w: 16,
    h: 16,
}

class Nucleo {
    
    constructor(st) {
        augment(this, defaults)
        augment(this, st)
        this.type = this.typeDef[2]
        this.image = this.typeDef[0]
    }

    evo(dt) {
        if (this.y < 0){
            lib.vfx.missed(this.x, this.y, this.type)
            sfx(res.sfx.explosionLow)
            this.__.detach(this);
        }
        this.x += this.dx * dt
        this.y += this.dy * dt

        //&& o.isDamaged(this.type))
        lib.util.findNode(o => o instanceof dna.Nucleotide)
            .forEach(o => {
                //let dist = o.getDistanceToAtom(this.x, this.y, this.type);

                if (o.touchLeft(this.x, this.y, this.type)) {
                    this.__.detach(this);

                } else if (o.touchRight(this.x, this.y, this.type)) {
                    lib.vfx.hit(this.x, this.y, this.type)
                    this.__.detach(this);

                }
                /*
                if (dist < env.tune.hitDistance){
                    this.__.detach(this);
                    o.setDamaged(this.type, false);
                    env.state.repaired ++;
                }
                */
            });
    }

    draw() {
        const { x, y, w, h } = this

        blocky()
        image(this.image, x-w/2, y-w/2, w, h);
    }

}
