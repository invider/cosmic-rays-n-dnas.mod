let id = 0

class Radiation {
    
    constructor(params) {
        this.Z = 11;
        this.name = 'radiation' + (++id);
        this.target = undefined;
        this.targetDirection = "right"
        this.x = 0;
        this.y = 0;
        this.minDist = Infinity;
        augment(this, params);
    }

    evo(dt) {
        if (this.target){
            let dist = this.target.getDistanceToAtom(this.x, this.y);
            let targetY = this.targetDirection == "left" ? this.target.leftY : this.target.rightY;
            let speed = dt * 200;
            let xSpeed = (this.target.x - this.x);
            let ySpeed = (targetY - this.y);
            let len = length(xSpeed, ySpeed)
            xSpeed /= len
            ySpeed /= len
            this.x += xSpeed * speed;
            this.y += ySpeed * speed;
            
            console.log(dist);
            if (dist < 20 || dist > this.minDist) {
                if (this.targetDirection === "left") {
                    this.target.leftDamaged = true;
                } else {
                    this.target.rightDamaged = true;
                }
                this.__.detach(this);
            }
            this.minDist = Math.min(this.minDist, dist);
        }
    }

    draw() {
        alpha(1);
        image(res.sprites.rad, this.x, this.y, 8, 8);
    }
}
