class Nucleotide {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
        this.size = ry(0.3);
        augment(this, settings);
    }

    evo(dt){
        this.rotation += dt * 1;
    }

    draw(){
        let multiplier = Math.sin(this.x / 100 + this.rotation);
        let distance = this.size * multiplier
        stroke("#FF0000")
        line(this.x, this.y - distance, this.x, this.y);
        line(this.x, this.y + distance, this.x, this.y);
        image(res.sprites.atom, this.x - 8, this.y - distance - 8, 16, 16);
        image(res.sprites.atom, this.x - 8, this.y + distance - 8, 16, 16);
    }

}