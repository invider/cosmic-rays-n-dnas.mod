class Radiation {
    
    constructor(params) {
        this.Z = 11;
        this.name = 'radiation';
        this.target = undefined;
        this.targetDirection = "right"
        this.x = 0;
        this.y = 0;
        augment(this, params);
    }

    evo(dt) {
        if (this.target){
            let targetY = this.targetDirection == "left" ? this.target.leftY : this.target.rightY;
            let speed = dt * 1500;
            let xSpeed = (this.target.x - this.x);
            let ySpeed = (targetY - this.y);
            let len = length(xSpeed, ySpeed)
            xSpeed /= len
            ySpeed /= len
            this.x += xSpeed * speed;
            this.y += ySpeed * speed;
        }
    }

    draw() {
        image(res.sprites.rad, this.x, this.y, 8, 8);
    }
}
