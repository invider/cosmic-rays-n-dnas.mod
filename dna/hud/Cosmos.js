'use strict'

const Container = dna.hud.Container

const defaults = {
    Z: 10,
    keepZ: true,
    
    name: 'cosmos',

    x: 0,
    y: 0,
    w: 320,
    h: 200,
    border: 0,
}

const Cosmos = function(dat) {
    sys.augment(this, defaults)
    Container.call(this, dat)
}
Cosmos.prototype = Object.create(Container.prototype)

Cosmos.prototype.init = function() {
    this.adjust()
}

// return horizontal coordinate from a relative 0..1 value
Cosmos.prototype.rx = function(v) {
    return this._w * v
}

// return vertical coordinate from a relative 0..1 value
Cosmos.prototype.ry = function(v) {
    return this._h * v
}

// return horizontal coordinate from a relative 0..1 value
// limited to the screen width
Cosmos.prototype.lrx = function(v) {
    return this._w * limit(v, 0, 1)
}

// return vertical coordinate from a relative 0..1 value
// limited to the screen height
Cosmos.prototype.lry = function(v) {
    return this._h * limit(v, 0, 1)
}

Cosmos.prototype.screenX = function(x) {
    return this.x + x * this.scale
}

Cosmos.prototype.screenY = function(y) {
    return this.y + y * this.scale
}

Cosmos.prototype.worldX = function(x) {
    return (x - this.x) / this.scale
}

Cosmos.prototype.worldY = function(y) {
    return (y - this.y) / this.scale
}

Cosmos.prototype.adjust = function() {
    // calculate scale
    const border = env.style.border
    const targetW = env.style.targetWidth
    const targetH = env.style.targetHeight

    const aspect = targetW/targetH
    const hscale = this.__.w/(targetW + border*2)
    const vscale = this.__.h/(targetH + border*2)
    let scale = hscale
    if (hscale > vscale) scale = vscale

    this._w = targetW
    this._h = targetH
    this.w = this._w * scale
    this.h = this._h * scale

    this.x = (this.__.w - this.w)/2
    this.y = (this.__.h - this.h)/2
    this.scale = scale

    this._ls.forEach(w => { if (sys.isFun(w.adjust)) w.adjust() })
}

Cosmos.prototype.drawBackground = function() {}

Cosmos.prototype.draw = function() {
    ctx.save()

    ctx.translate(this.x, this.y)
    ctx.beginPath()
    ctx.rect(0, 0, this.w, this.h)
    ctx.clip()
    ctx.scale(this.scale, this.scale)

    /*
    stroke('#ff0000')
    lineWidth(2)
    rect(0, 0, 320, 240)
    */

    this.drawBackground()
    this.drawContent()

    ctx.restore()
}

Cosmos.prototype.onClick = function(x, y, e) {
    if (this.hidden || this.disabled) return
    Container.prototype.onClick.call(this, x/this.scale, y/this.scale, e)
}

Cosmos.prototype.onDblClick = function(x, y, e) {
    if (this.hidden || this.disabled) return
    Container.prototype.onDblClick.call(this, x/this.scale, y/this.scale, e)
}

Cosmos.prototype.onMouseDown = function(x, y, b, e) {
    if (this.hidden || this.disabled) return
    Container.prototype.onMouseDown.call(this, x/this.scale, y/this.scale, b, e)
}

Cosmos.prototype.onMouseUp = function(x, y, b, e) {
    if (this.hidden || this.disabled) return
    Container.prototype.onMouseUp.call(this, x/this.scale, y/this.scale, b, e)
}

Cosmos.prototype.onMouseMove = function(x, y, e) {
    if (this.hidden || this.disabled) return
    Container.prototype.onMouseMove.call(this, x/this.scale, y/this.scale, e)
}
