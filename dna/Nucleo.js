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
        this.type = "red";
    }

    evo(dt) {
        this.x += this.dx * dt
        this.y += this.dy * dt
        lib.util.findNode(o => o instanceof dna.Nucleotide && o[this.type + "Damaged"] && o.getDistanceToAtom(this.x, this.y, this.type) < 32)
            .forEach(o => {
                debugger;
                this.__.detach(this);
                o[this.type + "Damaged"] = false;
            });
    }

    draw() {
        const { x, y, w, h } = this

        blocky()
        image(res.sprites.atom_red, x-w/2, y-w/2, w, h);
    }

}
