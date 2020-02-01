function setup() {

    const hud = lab.spawn('hud/Hud', {
        Z: 1,
        name: 'hud',
    })
    const cosmos = lab.hud.spawn('hud/Cosmos') 

    // shortcut to cosmos
    $.cosmos = cosmos

    lab.spawn('Transition', {
      time: 2,
      Z: 9999,
      startIn: 3000,
      name: 'Transition1',
      backgroundImage: res.backgrounds.splash1
    });

    lab.spawn('Transition', {
      time: 2,
      Z: 9999,
      startIn: 9000,
      name: 'Transition2',
      backgroundImage: res.backgrounds.splash2
    });

    setTimeout(() => {
      // start the game
      // TODO move to the menu 'New Game' option
      trap('start')
    }, 11000);
}
