"use strict"

// Promise (ES6) - позволяет успешно и приятно работать с разными ассинхронными операциями

// Промисы - это обещания (если произошло что то то мы обещаем что у нас выполнится следующее действие)

console.log("Запрос данных...");

const req = new Promise(function(resolve, reject) { // resolve - обещание выполнилось reject - не выполнилось
    setTimeout(() => {
        console.log("Подготовка данных");

        const product = {
            name: "TV",
            price: 2000
        };

        resolve();
    }, 2000);
}); // создали обещание

req.then(() => {
    console.log("Данные получены")
})

setTimeout(() => {
    product.status = "order";
    console.log(product)
}, 2000);


// CALLBACK ( БЕЗ ПРОМИСОВ)
setTimeout(() => {
    console.log("Подготовка данных");

    const product = {
        name: "TV",
        price: 2000
    };

    setTimeout(() => {
        product.status = "order";
        console.log(product)
    }, 2000);
}, 2000);