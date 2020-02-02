// game fine tuning constants
const tune = {
    border: 10,

    radiationFq: .4,
    radiationTimeFactor: 1.1,

    shotSpeed: 120,
    hitDistance: 10,
    
    nucleoColors: {
      "blue": [res.sprites.atom_blue, "#091c67"],
      "red": [res.sprites.atom_red, "#670909"],
      "green": [res.sprites.atom_green, "#006704"]
    },

    init: function() {
        const colors = this.nucleoColors
        Object.keys(this.nucleoColors).forEach(k => {
            colors[k].push(k)
        })
    },
}
