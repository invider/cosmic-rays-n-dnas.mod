function ray() {
    let nodes = lib.util.findNode(o => o instanceof dna.Nucleotide);
    let toDamage = lib.math.rnde(nodes.filter(o => !o.leftDamaged || !o.rightDamaged ));

    if (!toDamage.leftDamaged){
        $.cosmos.dna.spawn(dna.Radiation, {
            target: toDamage,
            targetDirection: "left"
        })
    } else {
        $.cosmos.dna.spawn(dna.Radiation, {
            target: toDamage,
            targetDirection: "right"
        })
    }
}
