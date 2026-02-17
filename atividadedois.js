// Exercício 1 - Tipos de Triângulos

let A = Number(prompt("Digite A:"));
let B = Number(prompt("Digite B:"));
let C = Number(prompt("Digite C:"));

let maior, meio, menor;

if (A >= B && A >= C) {
maior = A;
if (B >= C) {
meio = B;
menor = C;
} else {
meio = C;
menor = B;
}
} else if (B >= A && B >= C) {
maior = B;
if (A >= C) {
meio = A;
menor = C;
} else {
meio = C;
menor = A;
}
} else {
maior = C;
if (A >= B) {
meio = A;
menor = B;
} else {
meio = B;
menor = A;
}
}

A = maior;
B = meio;
C = menor;

if (A >= B + C) {
alert("NAO FORMA TRIANGULO");
} else {
if (A * A === B * B + C * C) {
alert("TRIANGULO RETANGULO");
} else if (A * A > B * B + C * C) {
alert("TRIANGULO OBTUSANGULO");
} else {
alert("TRIANGULO ACUTANGULO");
}

if (A === B && B === C) {
alert("TRIANGULO EQUILATERO");
} else if (A === B || B === C || A === C) {
alert("TRIANGULO ISOSCELES");
}
}

// Exercício 2 - Pares entre Cinco Números

let pares = 0;

for (let i = 0; i < 5; i++) {
let valor = parseInt(prompt("Digite um número inteiro:"));
  
if (valor % 2 === 0) {
pares++;
}
}

alert(pares + " valores pares");

// Exercício 3 - Números Ímpares

let X = Number(prompt("Digite um número inteiro:"));

for (let i = 1; i <= X; i++) {
if (i % 2 !== 0) {
alert(i);
}
}