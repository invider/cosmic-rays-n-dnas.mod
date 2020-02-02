module.exports = function() {
    ctx.width = $.env.style.monitorWidth
    ctx.height = $.env.style.monitorHeight
    ctx.canvas.width = $.env.style.monitorWidth
    ctx.canvas.height = $.env.style.monitorHeight
}
