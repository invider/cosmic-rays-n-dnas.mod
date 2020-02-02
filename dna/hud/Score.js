
const FONT_SIZE = 6
const H = 16

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
        image(res.ui.hud, 0, this.y, 320, H);
        fill("white");
        const f = `${FONT_SIZE * $.cosmos.scale}px coolville`
        font(f)
        alignLeft()
        baseMiddle()
        text(`Life: ${100 - percent}% Mutation: ${percent}% Score: ${env.state.repaired}`, this.x + 10, this.y + 6);
    }
}
