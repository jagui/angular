"use strict";
function printCoordinates(p) {
    console.log(`Point's coordinate x is ${p.x}`);
    console.log(`Point's coordinate y is ${p.y}`);
}
printCoordinates({ x: 1, y: 2 });
function printId(id) {
    if (typeof id == "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}
printId("abcd");
