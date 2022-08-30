//Proposta:

/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim,
pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não.
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */

// Atribuindo valres

const name = prompt("E aí, turista! Qual o seu nome?");

let cities = " ";
let howMuchCities = 0;

// Interagindo e adicionando condições

let continuar = prompt("Você já visitou alguma cidade? [SIM/NÃO]");

switch (contiunuar) {
  case "NÃO":
    break;

  case "NAO":
    break;
}

while (continuar === "SIM") {
  let city = prompt("Qual o nome da cidade visitada?");
  cities += " - " + city + "\n";
  howMuchCities++;
  continuar = prompt("Você visitou mais alguma outra cidade? [SIM/NÃO]");
}

// Exibindo resultados 

alert(
  name +
    ", você já visitou visitou " +
    howMuchCities +
    " cidades. \n\nAqui estão elas:\n" +
    cities
);
