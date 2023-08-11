const char = createKnight("magozin");
const monster = createBigMonster("monster");

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),

);