// var jsonData = {
//     JSON
// }

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            const jsonData = {
                userName: "Burulai",
                userAge: 19,
                adress: {
                    city: "Osh",
                    country: "Kygystan"
                }
            }
            const jsonstringify = JSON.stringify(jsonData)
            console.log(jsonstringify);
            resolve(jsonstringify)
        } else {
            reject('something has gone wrong')
        }
    }, 2000)

});
promise
    .then((jsonData) => {
        setTimeout(() => {
            const parse = JSON.parse(jsonData)
            console.log(parse);
        }, 2000)
    })
    .catch((error) => {
        console.log('Oops sorry ,try again', error);
    })
    .finally(() => {
        console.log('loading ended');
    })
