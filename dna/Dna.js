class Dna extends sys.LabFrame {
    constructor(settings){
        super();
        this.x = 0;
        this.y = 0;
        sys.augment(this, settings);
        for (let i=0; i<100; i++){
            sys.spawn(dna.Nucleotide, {
                x: this.x + i * 20,
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