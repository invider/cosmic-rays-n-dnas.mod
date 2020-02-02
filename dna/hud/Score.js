

class Score {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        augment(this, settings);
    }

    init() {
       
    }

    draw(){
        let nodes = lib.util.findNode(o => o instanceof dna.Nucleotide);
        let atoms = nodes.length * 2;
        let currentDamaged = env.state.damaged - env.state.repaired;
        let percent = Math.floor(currentDamaged / atoms * 100);

        fill("blue");
        text(`L: ${100 - percent}%, M: ${percent}%, S: ${env.state.repaired}`, this.x, this.y + 15);
        // text(`R: ${env.state.repaired}`, this.x, this.y + 35);
        // text(`T: ${env.state.damaged}`, this.x, this.y + 55);
        // text(`P: ${percent} %`, this.x, this.y + 75);
    }
}
