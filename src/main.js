// fetch
// pending

//const users = fetch("https://jsonplaceholder.typicode.com/usres");

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});

console.log(users);





