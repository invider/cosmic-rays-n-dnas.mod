module.exports = function(e) {
    if (e.repeat) return
    let nodes = lib.util.findNode(o => o instanceof dna.Nucleotide);
    let toDamage = lib.math.rnde(nodes.filter(o => !o.leftDamaged || !o.rightDamaged ));
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
