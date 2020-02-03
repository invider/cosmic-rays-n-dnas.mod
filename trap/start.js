// traps the start of the game
function start() {
    const DNA = $.cosmos.spawn('Dna', {
        x: 0,
        y: $.cosmos.ry(.5)
    })
    $.DNA = DNA

    // const monitor = $.cosmos.spawn('hud/Monitor')
    const score = $.cosmos.spawn('hud/Score', {
        x: 0, 
        y: 0,
        Z: 100000
    })
    //lib.util.hideCursor()

    // create dna and nanobot
    const cosmos = lab.hud.cosmos
    const bot = cosmos.spawn('Nanobot')

    // make a shortcut
    $.bot = bot

    lab.background.color = env.style.background

    cosmos.spawn('spaceBackground', {
        name: 'stars'
    })

    lab.spawn('radiationSource')

    env.state.game = 'started'
}
