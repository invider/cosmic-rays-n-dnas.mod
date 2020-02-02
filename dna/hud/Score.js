
const FONT_SIZE = 6
const H = 16

class Score {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.isGameOver = false;
        augment(this, settings);
        this.life = 100;
    }

    init() {
       
    }

    evo() {
        if (this.life <= 0) {
            this.isGameOver = true;
        }
    }

    draw(){
        let nodes = lib.util.findNode(o => o instanceof dna.Nucleotide);
        let atoms = nodes.length * 2;
        let currentDamaged = env.state.damaged - env.state.repaired;
        let percent = Math.floor(currentDamaged / atoms * 100);
        this.life = 100 - percent;

        if (this.isGameOver) {
            this.Z = 1000001;
            kill($.bot);
            background('#000');
            fill("white");
            font(`${32 / $.cosmos.scale}px coolville`)
            text('GAME OVER!!!', this.__.rx(.5) - 30, this.__.ry(.5) - 10);
            text(`SCORE - ${env.state.repaired * 100}`, this.__.rx(.5) - 20, this.__.ry(.5) + 10);
        } else {
            image(res.ui.hud, 0, this.y, 320, H);
            fill("white");
            const f = `${FONT_SIZE * $.cosmos.scale}px coolville`
            font(f)
            alignLeft()
            baseMiddle()
            text(`Life: ${this.life}% Score: ${env.state.repaired * 100}`, this.x + 10, this.y + 9);
        }
    }
}
