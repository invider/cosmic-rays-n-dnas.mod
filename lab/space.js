
let STAR_FQ = 2
let METEOR_FQ = 0.5

// star background
module.exports =  {

    Z: 1,

    speed: -5,

    stars: [],

    newStar: function(falling) {
        let star = {
            a: true,
            falling: falling,
            c: this._.lib.math.rndi(3),
            x: this._.lib.math.rndi(this._.env.width),
            y: (this.speed < 0)? -20 : this._.env.height + 20,
            //x: this._.env.width,
            //y: this._.lib.math.rndi(this._.env.height),
            s: 4 + this._.lib.math.rndi(8), // relative speed
            m: 5 + this._.lib.math.rndi(10),
        }
        if (falling) {
            star = {
                a: true,
                falling: falling,
                c: this._.lib.math.rndi(3),
                x: this._.lib.math.rndi(this._.env.width*2),
                y: -20,
                dx: -150 - lib.math.rndi(150),
                dy: 300 + lib.math.rndi(300),
                m: 4 + this._.lib.math.rndi(5),
            }
        }

        // place the star
        for (let i = 0; i < this.stars.length; i++) {
            if (!this.stars[i].a) {
                this.stars[i] = star
                return
            }
        }
        this.stars.push(star)
    },

    spawn: function() {
        for(let i = 0; i < 180*60; i++) {
            this.evo(0.015)
        }
    },

    evo: function(dt) {
        if (this._.lib.math.rndf() < STAR_FQ * dt) this.newStar(false)
        if (this._.lib.math.rndf() < METEOR_FQ * dt) this.newStar(true)

        // move stars
        let speed = this.speed
        this.stars.forEach( star => {
            if (star.falling) {
                star.x += star.dx * dt
                star.y += star.dy * dt
                if (star.y > env.height) star.a = false
            } else {
                star.y -= speed * star.s * dt
                if (star.y < -env.height|| star.y > env.height*2) star.a = false
            }
        })
    },

    draw: function() {
        background(env.style.background)

        // draw stars
        blocky()
        this.stars.forEach( star => {
            let img = res.stars['star-blue']
            switch(star.c) {
            case 1: img = res.stars['star-blue']; break;
            case 2: img = res.stars['star-yellow']; break;
            }
            image(img, star.x, star.y, star.m, star.m)
        })
    },
};

