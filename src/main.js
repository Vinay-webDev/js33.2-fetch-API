// fetch
// pending

//const users = fetch("https://jsonplaceholder.typicode.com/usres");
/*const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});

console.log(users); */
//-------------------------------------------//
//Async / Await

const myUsers = {
    users: []
};

// if we wanna use Async/Await while defining a function we need to declare it right at the begining or tell right at the begining*****
/*
async function myFunction() {

} */
// we can also use arrow function if we want
// remember we always have to use await within async function*****
/*
const myFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}

myFunction(); */

const myFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const myAnotherFunction = async () => {
    const data = myFunction();
    console.log(data);
}

myAnotherFunction();






