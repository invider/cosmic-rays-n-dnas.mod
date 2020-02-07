//
// pad controllers monitor
//
const USAGE_TIMEOUT = 15 * 1000

let sens = 0.3 // analog sticks sensitivity

const bind = []
const lastUsage = []

function activate(id, control) {
    lastUsage[id] = Date.now()
}

function isActive(id) {
    return (lastUsage[id] && Date.now()
        -lastUsage[id] < USAGE_TIMEOUT);
}

function evo(dt) {
    pad().forEach(d => {
        if (d.index >= 4) return
        if (!bind[d.index]) {
            bind[d.index] = {}
            log('registering gamepad:')
            console.dir(d)
        }

        const b = $.bot
        if (!b) return
        const id = d.index

        // directional controls
        let x = d.axes[0] || d.axes[2] || d.axes[4]
        let y = d.axes[1] || d.axes[3] || d.axes[5]

        if (d.buttons[12] && d.buttons[12].pressed) y = -1
        if (d.buttons[13] && d.buttons[13].pressed) y = 1
        if (d.buttons[14] && d.buttons[14].pressed) x = -1
        if (d.buttons[15] && d.buttons[15].pressed) x = 1

        if (x < -sens) {
            activate(id)
            b.act('left')
        } else if (x > sens) {
            activate(id)
            b.act('right')
        } else if (isActive(id)) {
            b.stop('left')
            b.stop('right')
        }

        if ((d.buttons[0] && d.buttons[0].pressed)
                    || (d.buttons[1] && d.buttons[1].pressed)
                    || (d.buttons[2] && d.buttons[2].pressed)
                    || (d.buttons[3] && d.buttons[3].pressed)) {
            activate(id)
            b.act('shot')
        } else {
            b.stop('shot')
        }
    })
}
