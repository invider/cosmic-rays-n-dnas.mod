function setup() {
    //lab.spawn('Sequence')
    lab.spawn('Dna', {
        x: 10,
        y: ry(0.4)
    })

    lab.transition.transit(2, 0.5)

    // start the game
    // TODO move to the menu 'New Game' option
    trap('start')
}
