// Exercise with multiple callbacks

let stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName){
    stock[itemName] -= 1;
    console.log("Payment is being processed for item " + itemName);
};

function processError(itemName) {
    console.log("No more " + itemName + " in stock");
    console.log("Payment is not being processed");
};

function processOrder(itemName, callbackPayment, callbackError){
    console.log("Verifying the stock of " + itemName);
    if (!stock[itemName] || stock[itemName] <= 0) {
        callbackError(itemName);
    } else {
        callbackPayment(itemName);
    };
};



while (1){
    let ask = prompt("Please enter the item you want to purchase(Macbook, iPhone)"); 
    ask = ask.toLowerCase();
    processOrder(ask, processPayment, processError);
}