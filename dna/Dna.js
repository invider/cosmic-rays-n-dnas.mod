class Dna extends sys.LabFrame {
    constructor(settings){
        super();
        this.Z = 2;
        this.x = 0;
        this.y = 0;
        sys.augment(this, settings);
    }

    init() {
        for (let i=0; i<100; i++){
            this.spawn(dna.Nucleotide, {
                x: this.x + i * 35,
                y: this.y
            })
        }
    }

    draw(){
        save();
        translate(this.x, this.y);
        super.draw();
        restore();
    }

}
