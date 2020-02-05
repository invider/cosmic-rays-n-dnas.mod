const LEN = 3
const queue = []

function populateQueue() {
    while (queue.length < LEN) {
        const e = lib.math.rnde(env.tune.nucleoColors)
        queue.push(e[2])
    }
}

function getFutureList() {
    populateQueue()
    return queue
}

function next() {
    populateQueue()
    const type = queue.shift()
    populateQueue()
    return type
}

