
function second() {
    $.cosmos.spawn('Transition', {
      Z: 9992,
      name: 'transition2',
      backgroundImage: res.backgrounds.splash2,
      wait: 2.5,
      fadein: 1,
      keep: 2,
      fadeout: 2,
      onHidden: last,
    });
}

function last() {
    // last one is on the lab!
    lab.spawn('Transition', {
        wait: 0,
        fadein: 0,
        keep: 0.5,
        fadeout: 2,
        Z: 9000,
        name: 'transition3',
        backgroundColor: '#000000',

        onFadeout: () => {
            $.cosmos.spawn('UI', {
                name: '123'
            });
        }
    });
}

function splash() {
    if (env.config.fast) {
          trap('start')

    } else {
        // fade from black
        $.cosmos.spawn('Transition', {
          Z: 9000,
          name: 'transition0',
          backgroundColor: '#000000',
          wait: 0,
          fadein: 0,
          keep: 3,
          fadeout: 0,
        });

        $.cosmos.spawn('Transition', {
          Z: 9991,
          name: 'transition1',
          backgroundImage: res.backgrounds.splash1,
          wait: 0.5,
          fadein: 1,
          keep: 3,
          fadeout: 2,
          onFadeout: second,
        });

    }
}
