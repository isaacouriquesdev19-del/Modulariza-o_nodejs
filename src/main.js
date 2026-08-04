const {getFullName, productType} = require("./services/products.js");
const products = require("./services/products.js");

const config = require("./services/config.js");
const database = require("./services/database.js");

async function main() {
    console.log("Carrinho de compras");

    getFullName("1","teclado");
    products.getFullName("1", "teclado");

    console.log(productType);

    //product.getFullName("408","mousepad");
    //product.getFullName("408","mousepad");
    //product.getFullName("508","mouse");

    database.connectToDatabase("my-database");
}

main();