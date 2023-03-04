console.log("start")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => { //response 리턴
        // response.json().then((data) => {
        //     console.log("data", data)
        // }) => nested 방식
        return response.json(); // promise 리턴
    })
    .catch((reason) => { // => chaining 방식
        console.log("reason", reason);
    })
    .then((data) => { console.log(data) });

console.log("end")