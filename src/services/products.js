//todas as funções que lidam com produtos ficam aqui
const productType = {
    version: "digital",
    tax: "x1",
};

//hidden const
const apiURL = {
    url: "www.google.com/api",
};

async function getFullName(codeId, productName) {
    console.log("product" + codeId + "__" + productName);
    await doBreakLine();
}

//hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getProductLable(productName) {
    console.log("Product" + productName);
}

module.exports = {
    getFullName,
    getProductLable,
    productType,
};