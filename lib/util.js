function hideCursor() {
    document.body.style.cursor = "none"
}

function findNode(func, tree){
    tree = tree || $.lab;
    let res = [];
    if (func(tree)){
        res.push(tree);
    }
    if (tree._ls){
        for (let k in tree._ls){
            res = res.concat(findNode(func, tree._ls[k]));
        }
    }
    return res;
}

function getRandomNucleoColor() {
    return env.tune.nucleoColors[job.nucleoSource.next()];
}

function getRandomColor() {
    const colors = Object.keys(env.tune.nucleoColors);
    const randomColor = RND(0, colors.length - 1);
    return colors[randomColor]
}
