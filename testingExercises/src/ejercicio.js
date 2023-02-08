import fetch from "node-fetch";

export function multiply(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) throw new Error("No se puede dividir por 0");
  return a / b;
}

export function first(arr) {
  return arr[0];
}

export function teachers() {
  return ["Bea", "Pepe", "Angel"];
}

export function isEven(n) {
  return n % 2 === 0;
}

export function phrase() {
  return "Hazte respetar!";
}

export function today() {
  return new Date();
}

export async function getChuckNorrisPhase() {
  return fetch("https://api.chucknorris.io/jokes/random").then((res) =>
    res.json()
  );
  //.then(data => data.value)
}

export function getPersonInfo() {
  return {
    name: "Juan",
    age: 34,
    address: {
      street: "Calle falsa 123",
      city: "Madrid",
    },
  };
}
