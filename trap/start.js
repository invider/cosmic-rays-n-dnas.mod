// traps the start of the game
function start() {

    lib.util.hideCursor()

    // create dna and nanobot
    const world = lab.hud.world
    world.spawn('Nanobot', {
        x: world._w/2,
        y: world._h/2,
    })
}
