// Exercice 1 : Variables et portée
var x = 5;
let y = 10;
const z = 15;

x = 20; // ✅ possible
y = 30; // ✅ possible
// z = 40; // ❌ Erreur si décommentée

console.log("x =", x);
console.log("y =", y);
console.log("z =", z);
/*
Explication :
- var : peut être redéclarée et réassignée.
- let : peut être réassignée mais pas redéclarée dans le même bloc.
- const : ne peut pas être réassignée ni redéclarée.
*/

// Exercice 2 : Teste la portée
function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a); // ✅ fonctionne
  // console.log(b); // ❌ b n'est pas défini (si décommenté)
}
testScope();
/*
- var → portée fonctionnelle
- let → portée bloc
*/

// Exercice 3 : Fonctions classiques vs fléchées
function sayHello(name) {
  return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Ali"));
console.log(sayHelloArrow("Sara"));
/*
Différences :
- Même résultat ici.
- Fonction fléchée plus concise, sans "this" propre.
*/

// Exercice 4 : Portée de this
const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name);
  },
};

person.sayHello();       // ✅ Bonjour Sara
person.sayHelloArrow();  // ⚠️ Bonjour undefined
/*
- Fonction classique → this = l’objet.
- Fléchée → this = global.
*/

// ==================== Import / Export ====================
// (Assure-toi d’avoir mathUtils.js et package.json avec { "type": "module" })

import message, { PI, carre } from "./mathUtils.js";

message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));

// ==================== Exercice 5 ====================
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log("Fruits :", fruits);

// ==================== Exercice 6 ====================
const nums1 = [1, 2, 3, 4, 5];
console.log(nums1.map(n => n * 2));
console.log(nums1.filter(n => n % 2 === 0));
console.log(nums1.reduce((sum, n) => sum + n, 0));

// ==================== Exercice 7 ====================
const nums2 = [1, 2, 3, 4, 5];
console.log(nums2.find(n => n > 3));
console.log(nums2.some(n => n < 0));
console.log(nums2.every(n => n > 0));

// ==================== Exercice 8 ====================
const user = { id: 1, name: "Ali", city: "Rabat" };
const { name: userName, city } = user;
console.log(`${userName} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);

// ==================== Exercice 9 ====================
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));

// ==================== Exercice 10 ====================
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}
getUsers();

// ==================== Exercice 11 ====================
const userName2 = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${userName2}, il est ${hour}h`);

// ==================== Exercice 12 ====================
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// ==================== Exercice 13 ====================
const settings = { theme: null };
console.log(settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);
