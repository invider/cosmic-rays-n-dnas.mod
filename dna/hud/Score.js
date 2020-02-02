
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

        if (!this.isGameOver && this.life <= 0) {
            log('game over!')
            this.isGameOver = true;

            $.lab.hud.cosmos.dna.detach()
            $.dna.dead = true
            $.dna.draw = false
            $.dna.evo = false 
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
            alignCenter()
            baseMiddle()
            text('GAME OVER!!!', this.__.rx(.5), this.__.ry(.5));
            text(`SCORE - ${env.state.repaired * 100}`, this.__.rx(.5), this.__.ry(.5) + 12);
        } else {

            image(res.ui.hud, 0, this.y, 320, H);

            //const fontSize = FONT_SIZE * $.cosmos.scale
            const fontSize = 10
            const f = `${fontSize}px coolville`
            font(f)
            fill("white");
            alignLeft()
            baseMiddle()
            //text(`Life: ${this.life}% Score: ${env.state.repaired * 100}`, this.x + 10, this.y);
            text(`Life: ${this.life}% Score: ${env.state.repaired * 100}`, this.x + 10, this.y + 7);
            
            //stroke('#ffff00')
            //line(10, 0, 10, fontSize)
            //rect(0, 0, 320, 240)
        }
    }
}
