"use strict"

// Promise (ES6) - позволяет успешно и приятно работать с разными ассинхронными операциями

// Промисы - это обещания (если произошло что то то мы обещаем что у нас выполнится следующее действие)

console.log("Запрос данных...");

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: "TV",
            price: 2000
        };

        resolve(product);
    }, 2000)
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "Order";
            resolve(product);
        }, 2000);
    })
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
});



// пример reject (если код не выполнился)
/* }).catch((data)=>{
   console.log(data);
});
*/

// блок кода finally используется в конце (позволяет выполнить действие в любом случае (абсолютно всегда));
/* }).finally(()=>{
   console.log(finally);
});
*/

// ALL I RACE (методы)

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log("1000 ms"));
//test(2000).then(() => console.log("2000 ms"));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log("All");
}); // - оба промиса выполнились (ждет выполнения все промисов и только тогда чтото делал)

Promise.race([test(1000), test(2000)]).then(() => {
    console.log("All");
}); // - выполняется когда самый первый промис выполнился


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