const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name){
    const otherCats = [name, ...cats];
    return otherCats;
}
function removeLastCat(){
    const noGarfield = cats.slice(0, cats.length-1);
    return noGarfield;
}
function removeFirstCat(){
    const noMilo = cats.slice(1);
    return noMilo;
}

