const FONT_SIZE = 6

class Score {

    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.w = res.ui.hud.width
        this.h = res.ui.hud.height
        augment(this, settings);
        this.life = 100;
    }

    evo() {

        if (env.state.game === 'started' && this.life <= 0) {
            log('game over!')
            env.state.game = 'over'

            $.lab.hud.cosmos.dna.detach()
            $.dna.dead = true
            $.dna.draw = false
            $.dna.evo = false 

            sfx(res.sfx.gameover)
        }
    }

    draw(){
        let nodes = lib.util.findNode(o => o instanceof dna.Nucleotide);
        let atoms = nodes.length * 2;
        let currentDamaged = env.state.damaged - env.state.repaired;
        let percent = Math.floor(currentDamaged / atoms * 100);
        this.life = 100 - percent;

        if (env.state.game === 'over') {
            this.Z = 1000001;
            kill($.bot);
            background('#000');
            fill("white");
            font('18px coolville')
            alignCenter()
            baseMiddle()
            text(res.msg.gameover, this.__.rx(.5), this.__.ry(.5));

            text(`SCORE - ${env.state.repaired * 100}`, this.__.rx(.5), this.__.ry(.5) + 20);

        } else {

            image(res.ui.hud, 0, this.y, this.w, this.h);

            //const fontSize = FONT_SIZE * $.cosmos.scale
            const fontSize = 10
            const f = `${fontSize}px coolville`
            font(f)
            fill("white");
            alignLeft()
            baseMiddle()
            //text(`Life: ${this.life}% Score: ${env.state.repaired * 100}`, this.x + 10, this.y);
            text(`Life: ${this.life}% Score: ${env.state.repaired * 100}`, this.x + 10, this.y + 7);

            // show next
            const nw = 12
            const gap = 2
            let y = this.y + 1
            let x = this.w - 4*nw
            const next = job.nucleoSource.getFutureList()
            next.forEach(type => {
                const img = env.tune.nucleoColors[type][0]
                image(img, x, y, nw, nw)
                x += nw + gap
            })
            
            //stroke('#ffff00')
            //line(10, 0, 10, fontSize)
            //rect(0, 0, 320, 240)
        }
    }
}
