

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

        fill("white");
        font(`${32 / $.cosmos.scale}px coolville`)
        text(`Life: ${100 - percent}% Mutation: ${percent}% Score: ${env.state.repaired}`, this.x, this.y + 15);
    }
}
