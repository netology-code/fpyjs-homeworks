class Product {
    #id;
    constructor(name, price, id){
        this.name = name;
        this.price = price;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }
}

class Fruit extends Product {
    constructor(name, price, id){
        super(name, price, id)
    }

    buy() {
        console.log("Мы купили продукт", this);
    }
}

const goods = [
    new Fruit("Апельсины", 70, 1),
    new Fruit("Яблоки", 60, 2),
    new Fruit("Мандарины", 90, 3),
    new Fruit("Бананы", 75, 4),
    new Fruit("Груши", 80, 5),
];

function printFruitName(index){
    if(!goods[index]) {
        throw new Error("Элемент не был найден");
    }
    console.log(goods[index].name);
}

for (let i = 0; i < 10; i++) {
    try {
        printFruitName(i);    
    } catch (error) {
        console.log("Произошла ошибка и мы её обработали");
    }
}