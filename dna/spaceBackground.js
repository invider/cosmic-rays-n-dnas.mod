const STAR_FQ = 2
const METEOR_FQ = 0.5

const Z = 1
const name = 'stars'

const stars = []
const speed = -5

function newStar(falling) {
    let star = {
        a: true,
        falling: falling,
        c: RND(3),
        x: RND(this.__.rx(1)),
        y: (this.speed < 0)? -20 : this.__.ry(1) + 20,
        s: 4 + RND(8), // relative speed
        m: 1 + RND(4),
    }
    if (falling) {
        star = {
            a: true,
            falling: falling,
            c: RND(3),
            x: RND(this.__.rx(1)*2),
            y: -20,
            dx: -150 - lib.math.rndi(150),
            dy: 300 + lib.math.rndi(300),
            m: 1 + RND(5),
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
}

function onSpawn() {
    /*
    for(let i = 0; i < 180*60; i++) {
        this.evo(0.015)
    }
    */
}

function evo(dt) {
    if (lib.math.rndf() < STAR_FQ * dt) this.newStar(false)
    if (lib.math.rndf() < METEOR_FQ * dt) this.newStar(true)

    // move stars
    let speed = this.speed
    this.stars.forEach( star => {
        if (star.falling) {
            star.x += star.dx * dt
            star.y += star.dy * dt
            if (star.y > this.__.ry(1)) star.a = false
        } else {
            star.y -= speed * star.s * dt
            if (star.y < - this.__.ry(1)
                || star.y > this.__.ry(1) * 2) star.a = false
        }
    })
}

function draw() {
    background(env.style.space)

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
}
