// traps the start of the game
function start() {
    $.cosmos.spawn('Dna', {
        x: 0,
        y: $.cosmos.ry(.5)
    })

    lib.util.hideCursor()

    // create dna and nanobot
    const cosmos = lab.hud.cosmos
    const bot = cosmos.spawn('Nanobot')

    // make a shortcut
    $.bot = bot
}
