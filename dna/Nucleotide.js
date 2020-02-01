class Nucleotide {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.left = "blue",
        this.right = "red",
        this.map = {
            "blue": [res.sprites.atom_blue, "#0000FF"],
            "red": [res.sprites.atom_red, "#FF0000"]
        }
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
        stroke(this.map[this.left][1]);
        line(this.x, this.y - distance, this.x, this.y);
        stroke(this.map[this.right][1]);
        line(this.x, this.y + distance, this.x, this.y);
        let size1 = 32 * sizeMultiplier;
        let size2 = 32 * size2Multiplier;

        blocky()
        image(this.map[this.left][0], this.x - size1 / 2, this.y - distance - size1 / 2, size1, size1);
        image(this.map[this.right][0], this.x - size2 / 2, this.y + distance - size2 / 2, size2, size2);
    }

}
