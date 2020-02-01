module.exports = function(e) {
    if (e.repeat) return
    let toDamage = lib.math.rnde($.lab._ls.filter(o => !o.leftDamaged || !o.rightDamaged ));
    if (!toDamage.leftDamaged){
        sys.spawn(dna.Radiation, {
            target: toDamage,
            targetDirection: "left"
        })
    } else {
        sys.spawn(dna.Radiation, {
            target: toDamage,
            targetDirection: "right"
        })
    }
    
    

}
