const Z = 0

// @depends(env/style)
function init() {
    this.color = env.style.space
}

function draw() {
    background(this.color)
}
