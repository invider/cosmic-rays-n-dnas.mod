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
        let offset = this.x / 100 + this.rotation;
        let multiplier = Math.sin(offset);
        let sizeMultiplier = Math.sin(offset + 300);
        let size2Multiplier = Math.sin(offset);
        let distance = this.size * multiplier
        stroke("#FF0000")
        line(this.x, this.y - distance, this.x, this.y);
        line(this.x, this.y + distance, this.x, this.y);
        let size1 = 16 * sizeMultiplier;
        let size2 = 16 * size2Multiplier;
        image(res.sprites.atom, this.x - size1 / 2, this.y - distance - size1 / 2, size1, size1);
        image(res.sprites.atom, this.x - size2 / 2, this.y + distance - size2 / 2, size2, size2);
    }

}