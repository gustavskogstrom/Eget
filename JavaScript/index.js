const main = document.createElement("main");

const Div = document.createElement("div");
Div.classList.add("Welcome");

const h1 = document.createElement("h1")
h1.innerHTML = "Welcome!";

Div.appendChild(h1);

main.appendChild(Div);


document.body.appendChild(main);

console.log(main);
console.log(Div);
console.log(h1);