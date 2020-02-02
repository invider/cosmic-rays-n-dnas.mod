// 
// nucleo-bullet
//
const defaults = {
    x: 0,
    y: 0,
    w: 9,
    h: 9,
}

class Nucleo {
    
    constructor(st) {
        augment(this, defaults)
        augment(this, st)
        this.type = "red";
    }

    evo(dt) {
        if (this.y < 0){
            lib.vfx.missed(this.x, this.y, this.type)
            setTimeout(() => {
                console.dir($.DNA.nombre)
            }, 100)
            this.__.detach(this);
        }
        this.x += this.dx * dt
        this.y += this.dy * dt

        lib.util.findNode(o => o instanceof dna.Nucleotide
                && o.isDamaged(this.type))
            .forEach(o => {
                let dist = o.getDistanceToAtom(this.x, this.y, this.type);
                if (dist < 30){
                    lib.vfx.hit(this.x, this.y, this.type)
                    this.__.detach(this);
                    o.setDamaged(this.type, false)
                }
            });
    }

    draw() {
        const { x, y, w, h } = this

        blocky()
        image(this.image, x-w/2, y-w/2, w, h);
    }

}
