module.exports = function() {
    // upgrade difficulty
    env.tune.radiationFq *= env.tune.radiationTimeFactor
    log(`new difficulty: ${env.tune.radiationFq}`)
}
