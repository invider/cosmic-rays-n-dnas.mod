

class Score {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        augment(this, settings);
    }

    init() {
       
    }

    draw(){
        fill("white")
        text(`D: ${env.state.damaged - env.state.repaired}`, this.x, this.y + 10);
        text(`R: ${env.state.repaired}`, this.x, this.y + 30);
        text(`T: ${env.state.damaged}`, this.x, this.y + 50);

    }
}
