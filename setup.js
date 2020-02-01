function setup() {

    const hud = lab.spawn('hud/Hud', {
        Z: 1,
        name: 'hud',
    })
    const world = lab.hud.spawn('hud/World') 

    lab.spawn('Dna', {
        x: 10,
        y: ry(0.5)
    })

    lab.transition.transit(2, 0.5)

    // start the game
    // TODO move to the menu 'New Game' option
    trap('start')
}
