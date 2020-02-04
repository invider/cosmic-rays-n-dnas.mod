class Nucleotide {
    constructor(settings){
        this.x = 0;
        this.y = 0;
        this.leftDamaged = false;
        this.rightDamaged = false;
        this.leftY = 0;
        this.rightY = 0;
        this.left = lib.util.getRandomColor();
        this.right = lib.util.getRandomColor();
        this.nucleoColors = env.tune.nucleoColors;
        this.rotation = 0;
        this.size = $.cosmos.ry(.17)
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
    isDamaged(color){
        if (this.left === color || "left" === color){
            return this.leftDamaged;
        }
        if (this.right === color || "right" === color){
            return this.rightDamaged;
        }
    }

    setDamaged(color, damaged){
        if (this.left === color || "left" === color){
            this.leftDamaged = damaged;
        }
        if (this.right === color || "right" === color){
            this.rightDamaged = damaged;
        }
    }
    getAtomY(color){
        if (this.left === color || "left" === color){
            return this.leftY;
        }
        if (this.right === color || "right" === color){
            return this.rightY;
        }
    }

    fixLeft(type) {
        // hit! decide on the action
        if (this.left !== type) {
            // wrong color!
            // TODO change?
            lib.vfx.changeColor(this.x, this.y + this.leftY, type)
            sfx(res.sfx.mutation)
        } else {
            this.leftDamaged = false
            env.state.repaired ++;
            lib.vfx.fix(this.x, this.y + this.leftY, this.left)
            sfx(res.sfx.fix)
        }
    }

    damageLeft() {
        this.leftDamaged = true
        env.state.misfixed ++;
        env.state.damaged ++; 
        lib.vfx.misfix(this.x, this.y + this.leftY, this.left)
        sfx(res.sfx.annihilation)
    }

    fixRight(type) {
        // hit! decide on the action
        if (this.right !== type) {
            // wrong color!
            // TODO change?
            lib.vfx.changeColor(this.x, this.y + this.rightY, type)
            sfx(res.sfx.mutation)

        } else {
            this.rightDamaged = false
            env.state.repaired ++;
            lib.vfx.fix(this.x, this.y + this.rightY, this.right)
            sfx(res.sfx.fix)
        }
    }

    damageRight() {
        this.rightDamaged = true
        env.state.misfixed ++;
        env.state.damaged ++; 
        lib.vfx.misfix(this.x, this.y + this.rightY, this.right)
        sfx(res.sfx.annihilation)
    }

    touchLeft(x, y, type) {
        if (this.leftY < 0) return
        const d = dist(x, y, this.x, this.leftY)
        if (d < env.tune.hitDistance) {

            if (this.leftDamaged) {
                this.fixLeft(type)

            } else if (this.left !== type) {
                this.damageLeft(type)
            } else {
                lib.vfx.misfix(this.x, this.y + this.leftY, this.right)
                sfx(res.sfx.match)
            }
            return true
        }
    }

    touchRight(x, y, type) {
        if (this.rightY < 0) return
        const d = dist(x, y, this.x, this.rightY)
        if (d < env.tune.hitDistance) {

            // hit! decide on the action
            if (this.rightDamaged) {
                this.fixRight(type)

            } else if (this.right !== type) {
                this.damageRight()
            } else {
                lib.vfx.misfix(this.x, this.y + this.leftY, this.right)
                sfx(res.sfx.match)
            }

            return true
        }
    }

    getDistanceToLeft(x, y) {
        return dist(x, y, this.x, this.leftY)
    }
    getDistanceToRight(x, y) {
        return dist(x, y, this.x, this.rightY)
    }
    getDistanceToAtom(x, y, color){
        return dist(x, y, this.x, this.getAtomY(color));
    }
    drawAtom(mode, x, y, sizeX, sizeY){
        if (
            (!this.leftDamaged && mode == "left") ||
            (!this.rightDamaged && mode == "right")
        ) {
            //this.drawDamage(mode, x, y);
            image(mode == "left" ? this.nucleoColors[this.left][0]: this.nucleoColors[this.right][0], x, y, sizeX, sizeY);
            
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
        stroke(this.nucleoColors[this.left][1]);
        line(this.x, this.y - this.distance, this.x, this.y);
        stroke(this.nucleoColors[this.right][1]);
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
