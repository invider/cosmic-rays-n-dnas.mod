function mouseDown(e) {
    if ($.bot && env.state.game === 'started') $.bot.shot()
}
