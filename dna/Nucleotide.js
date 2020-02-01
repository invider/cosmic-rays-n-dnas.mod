class Nucleotide {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.leftDamaged = false;
        this.rightDamaged = false;
        this.leftY = 0;
        this.rightY = 0;
        this.left = Math.random() > 0.5 ? "blue": "red",
        this.right = Math.random() > 0.5 ? "blue": "red",
        this.map = {
            "blue": [res.sprites.atom_blue, "#091c67"],
            "red": [res.sprites.atom_red, "#670909"]
        }
        this.rotation = 0;
        this.size = $.cosmos.ry(.2)
        augment(this, settings);
    }


    evo(dt){
        this.rotation += dt * 0.5;

        let offset = this.x / 100 + this.rotation;
        let angle = offset;
        let multiplier = Math.cos(angle);
        let sizeMultiplier = Math.cos(angle - Math.PI / 2) + 1;
        let size2Multiplier = Math.cos(angle + Math.PI / 2) + 1;
        this.distance = this.size * multiplier;
       
        const base = env.style.nucleotideBaseSize
        const factor = env.style.rotationScaleFactor
        this.leftSize = base + factor * sizeMultiplier;
        this.rightSize = base + factor * size2Multiplier;
        this.leftY = this.y - this.distance - this.leftSize / 2;
        this.rightY = this.y + this.distance - this.leftSize / 2;
    }
    drawAtom(mode, x, y, sizeX, sizeY){
        if (
            (!this.leftDamaged && mode == "left") ||
            (!this.rightDamaged && mode == "right")
        ) {
            //this.drawDamage(mode, x, y);
            image(mode == "left" ? this.map[this.left][0]: this.map[this.right][0], x, y, sizeX, sizeY);
            
        }
    }
    // drawDamage(mode, x, y){
    //     if ((!this.leftDamageFinished && mode == "left" && this.leftDamaged) ||
    //         (!this.rightDamageFinished && mode == "right" && this.rightDamaged)){
    //         stroke("#fbf236");
    //         lineWidth(30);
    //         alpha(0.2);
    //         //line(100, 100, 200, 200);
    //         line(100, 100, x, y);
    //         alpha(1);
    //     }
        
    // }
    draw(){
       
        lineWidth(env.style.nucleotideLinkWidth);
        stroke(this.map[this.left][1]);
        line(this.x, this.y - this.distance, this.x, this.y);
        stroke(this.map[this.right][1]);
        line(this.x, this.y + this.distance, this.x, this.y);
        blocky()
        if (this.leftSize < this.rightSize){
            this.drawAtom("left", this.x - this.leftSize / 2, this.leftY, this.leftSize, this.leftSize);
            this.drawAtom("right", this.x - this.rightSize / 2, this.rightY, this.rightSize, this.rightSize);
        } else {
            this.drawAtom("right", this.x - this.rightSize / 2, this.rightY, this.rightSize, this.rightSize);
            this.drawAtom("left", this.x - this.leftSize / 2, this.leftY, this.leftSize, this.leftSize);
        }
        
        
    }

}
