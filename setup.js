function setup() {
    // root UI node
    const hud = lab.spawn('hud/Hud', {
        Z: 1,
        name: 'hud',
    })
    const cosmos = lab.hud.spawn('hud/Cosmos') 
    // global shortcut to cosmos
    $.cosmos = cosmos

    env.sfxVolume = .7

    trap('splash')
}
