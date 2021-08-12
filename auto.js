let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}


function rest(product, price) {
    console.log(product, price);
    products.push(product);
    total = total - price;
    document.getElementById("checkout").innerHTML = '-411'
}

function pay() {
    window.alert(products.join(", \n"));
}
