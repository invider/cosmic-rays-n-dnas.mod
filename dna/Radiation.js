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
            let dist = this.target.getDistanceToAtom(this.x, this.y, this.targetDirection);
            let targetY = this.targetDirection == "left" ? this.target.leftY : this.target.rightY;
            let speed = dt * 200;
            let xSpeed = (this.target.x - this.x);
            let ySpeed = (targetY - this.y);
            let length = len(xSpeed, ySpeed)
            xSpeed /= length
            ySpeed /= length
            this.x += xSpeed * speed;
            this.y += ySpeed * speed;
            
            if (dist < 20 || dist > this.minDist) {
                if (!this.target.isDamaged(this.targetDirection)){
                    lib.vfx.damage(this.x, this.y)
                    sfx(res.sfx.explosion)
                    this.target.setDamaged(this.targetDirection, true);
                    env.state.damaged ++;
                };
                
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
