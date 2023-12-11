/*for (let i = 0; i < 10; i++) {
    document.write(`${i} <br>`);
}

let users =["pete", "john", "mary", "ivan", "masha", "katya"];

for (let i = 0; i < users.length; i++) {
    //if (users[i]=== 'ivan') break;
    if (users[i]==='john') continue;
    document.write(`<h3>${users[i]}</h3>`);
}*/

/*let potatoes = 320;

for (let i = 1; i <= potatoes; i++) {
    document.write(`Я почистил ${i} картошку <br>`);
}*/

/*let users = ["vasya", "pete", "john", "mary"];
for (let user of users) {
    document.write(`${user} <br>`);
}*/

let users = ["vasya", "pete", "john", "mary"];

let i = 0;
while (i < users.length) {
    document.write(`${users[i]} <br>`);
    i++;
}