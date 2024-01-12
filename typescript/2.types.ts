function printCoordinates(p: { x: number, y: number }) {
    console.log(`Point's coordinate x is ${p.x}`);
    console.log(`Point's coordinate y is ${p.y}`);
}

printCoordinates({ x: 1, y: 2 });


function printId(id: number | string) {
    if (typeof id == "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}

printId("abcd");

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

function getBear(): Bear {
    return new Bear()
    {

    };
}

const bear = getBear();
bear.name;
bear.honey;