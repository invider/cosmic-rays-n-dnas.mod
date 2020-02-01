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
        let angle = offset;
        let multiplier = Math.cos(angle);
        let sizeMultiplier = (Math.cos(angle - Math.PI / 2) + 2) / 2;
        let size2Multiplier = (Math.cos(angle + Math.PI / 2) + 2) / 2;
        let distance = this.size * multiplier;
        stroke("#FF0000");
        line(this.x, this.y - distance, this.x, this.y);
        line(this.x, this.y + distance, this.x, this.y);
        let size1 = 32 * sizeMultiplier;
        let size2 = 32 * size2Multiplier;
        image(res.sprites.atom, this.x - size1 / 2, this.y - distance - size1 / 2, size1, size1);
        image(res.sprites.atom, this.x - size2 / 2, this.y + distance - size2 / 2, size2, size2);
    }

}