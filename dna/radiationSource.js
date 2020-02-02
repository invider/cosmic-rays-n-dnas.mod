function evo(dt) {
    if (this.dead || this.paused) return

    if (rnd() < env.tune.radiationFq * dt) {
        trap('ray')
    }
}
