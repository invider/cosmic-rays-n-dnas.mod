module.exports = function(e) {
    if (e.repeat) return
    $.paused = !$.paused
}
