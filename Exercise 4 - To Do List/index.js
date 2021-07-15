/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);

/* Create an alert that lists all users, with their ids, names and what city they're from */

let message = ""; 

for (let i = 0; i < users.length; i++) {
    const user = users[i].username;
    const id = users[i].id;
    const name = users[i].name;
    const city = users[i].address.city;
   
    const row = `User: ${user} | ID: ${id} | Name: ${name} | City: ${city}\n`;

    message = message + row;

    console.log("Iteration #", i + 1);
    console.log("Message: ", message);
}

console.log(message);
alert(message);


const userID = parseInt(prompt("Please enter your single digit user ID", "0"), 10);

