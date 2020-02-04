const defaults = {
    Z: 2,
    name: 'dna',
    x: 0,
    y: 0,
}

class Dna extends sys.LabFrame {
    constructor(settings){
        super();
        augment(this, defaults)
        augment(this, settings)
    }

    init() {
        const step = env.tune.nanoStep

        let x = step * 2

        while (x < $.cosmos.rx(1) - step) {
            this.spawn(dna.Nucleotide, {
                x: x,
                y: 0,
            })
            x += step
        }
    }

    draw(){
        save();
        translate(this.x, this.y);
        super.draw();
        restore();
    }

    lx(x) {
        return x - this.x
    }

    ly(y) {
        return y - this.y
    }

    ox(x) {
        return this.x + x
    }

    oy(y) {
        return this.y + y
    }
}
