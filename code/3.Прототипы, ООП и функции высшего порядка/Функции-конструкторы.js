function Product(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
}

function Fruit(name, price, id) {
    Product.call(this, name, price, id);
}

Fruit.prototype = Object.create(Product.prototype);
Fruit.prototype.constructor = Product;

Fruit.prototype.buy = function() {
    console.log("Мы купили продукт", this);
}

const goods = [
    new Fruit("Апельсины", 70, 1),
    new Fruit("Яблоки", 60, 2),
    new Fruit("Мандарины", 90, 3),
    new Fruit("Бананы", 75, 4),
    new Fruit("Груши", 80, 5),
];

console.log(goods);

console.log(goods.map(good => good.name))