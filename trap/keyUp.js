function keyUp(e) {
    if (e.repeat) return
    const b = $.bot
    if (!b) return

    switch(e.code) {
        case 'KeyA': case 'ArrowLeft':
            b.stop('left')
            break
        case 'KeyD': case 'ArrowRight':
            b.stop('right')
            break
        case 'Space': case 'ShiftLeft': case 'ShiftRight':
            b.stop('shot')
            break
    }
}
