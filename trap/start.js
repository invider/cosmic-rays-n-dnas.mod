// traps the start of the game
function start() {

    lib.util.hideCursor()

    // create dna and nanobot
    const cosmos = lab.hud.cosmos
    const bot = cosmos.spawn('Nanobot')

    // make a shortcut
    $.bot = bot
}
