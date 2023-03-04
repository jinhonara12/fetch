function job1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("job1 fail!!")
        }, 2000)
    });
}

function job2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("job2!!")
        }, 2000)
    });
}

// nasted 방식
// job1().then(function (data) {
//     console.log(data);
//     job2().then(function (data2) {
//         console.log(data2)
//     })
// })

// chaining 방식/
job1()
    .then(function (data) {
        console.log(data)
        return job2()
    })
    .catch(function (reason) {
        console.log(reason);
        return Promise.reject()

    })
    .then(function (data) {
        console.log(data)
    })


