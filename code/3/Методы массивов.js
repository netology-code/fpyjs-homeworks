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

// console.log(goods);

// console.log(goods.map(good => good.name));

// console.log(goods.filter(fruit => fruit.price < 80));
console.log(goods.filter(fruit => fruit.name.toLowerCase().includes("а")).map(item => item.name));