function keyDown(e) {
    if (e.repeat) return
    const b = $.bot
    if (!b) return

    switch(e.code) {
        case 'KeyA': case 'ArrowLeft':
            b.act('left')
            break
        case 'KeyD': case 'ArrowRight':
            b.act('right')
            break
        case 'Space': case 'ShiftLeft': case 'ShiftRight':
            b.act('shot')
            break
    }
}
