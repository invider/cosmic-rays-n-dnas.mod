let id = 0

function poof(x, y, type) {

    let color = '#ffffff'
    switch(type) {
        case 'red': color = hsl(.1, .6, .8); break;
        case 'blue': color = hsl(.65, .6, .8); break;
        case 'green': color = hsl(.4, .6, .8); break;
    }

    $.DNA.spawn('Emitter', {
        Z: 1001,
        name: 'vfx' + (++id),
        x: x,
        y: y,
        color: color,

        lifespan: 0.1,
        force: 2000,
        radius: 0,
        size: 2, vsize: 0,
        speed: 160, vspeed: 0,
        angle: 0, spread: TAU,
        minLifespan: 0.1, vLifespan: 0.1,

        drawParticle: function() {
            fill(this.color)
            rect(this.x, this.y, this.r, this.r)
        }
    })
}

function missed(x, y, type) {
    poof(x, y, type)
}

function hit(x, y, type) {
    poof(x, y, type)
}

function damage(x, y, type) {
    poof(x, y, type)
}

function fix(x, y, type) {
    poof(x, y, type)
}

function misfix(x, y, type) {
    poof(x, y, type)
}

