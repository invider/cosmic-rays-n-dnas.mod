// traps the start of the game
function start() {
    lab.spawn('Dna', {
      x: 10,
      y: ry(0.25)
    })


    lib.util.hideCursor()

    // create dna and nanobot
    const cosmos = lab.hud.cosmos
    const bot = cosmos.spawn('Nanobot')

    // make a shortcut
    $.bot = bot
}
