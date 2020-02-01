function setup() {

    const hud = lab.spawn('hud/Hud', {
        Z: 1,
        name: 'hud',
    })
    const cosmos = lab.hud.spawn('hud/Cosmos') 

    // shortcut to cosmos
    $.cosmos = cosmos

    lab.spawn('Dna', {
        x: 10,
        y: ry(0.25)
    })

    lab.transition.transit(2, 0.5)

    // start the game
    // TODO move to the menu 'New Game' option
    trap('start')
}
