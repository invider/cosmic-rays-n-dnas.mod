function last() {
    // last one is on the lab!
    lab.spawn('Transition', {
        wait: 0,
        fadein: 0.5,
        keep: 0,
        fadeout: 0.5,
        Z: 9000,
        name: 'transition3',
        backgroundColor: '#000000',

        onKeep: () => {
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
          keep: 0.5,
          fadeout: 0,
        });

        $.cosmos.spawn('Transition', {
          Z: 9991,
          name: 'transition1',
          backgroundImage: res.backgrounds.splash1,
          wait: 0,
          fadein: 0.5,
          keep: 1.5,
          fadeout: 1.5,
          onFadeout: last,
        });

    }
}
