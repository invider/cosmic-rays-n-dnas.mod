class Nucleotide {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.left = Math.random() > 0.5 ? "blue": "red",
        this.right = Math.random() > 0.5 ? "blue": "red",
        this.map = {
            "blue": [res.sprites.atom_blue, "#091c67"],
            "red": [res.sprites.atom_red, "#670909"]
        }
        this.rotation = 0;
        this.size = ry(0.2);
        augment(this, settings);
    }


    evo(dt){
        this.rotation += dt * 1;
    }

    draw(){
        let offset = this.x / 100 + this.rotation;
        let angle = offset;
        let multiplier = Math.cos(angle);
        let sizeMultiplier = Math.cos(angle - Math.PI / 2) + 1;
        let size2Multiplier = Math.cos(angle + Math.PI / 2 + 1);
        let distance = this.size * multiplier;
        stroke(this.map[this.left][1]);
        line(this.x, this.y - distance, this.x, this.y);
        stroke(this.map[this.right][1]);
        line(this.x, this.y + distance, this.x, this.y);
        let size1 = 28 + 8 * sizeMultiplier;
        let size2 = 28 + 8 * size2Multiplier;

        blocky()
        image(this.map[this.left][0], this.x - size1 / 2, this.y - distance - size1 / 2, size1, size1);
        image(this.map[this.right][0], this.x - size2 / 2, this.y + distance - size2 / 2, size2, size2);
    }

}
