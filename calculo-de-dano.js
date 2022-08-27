// Cálculo de dano

/* Proposta: Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome,
a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então
calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual
a diferença entre o ataque e a defesa.

- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a
metade da diferença entre o ataque e a defesa.

- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor
e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

// Solicitando atributos do atacante

const char1 = prompt("Insira o nome do invocador atacante: ");
const attackPower1 = prompt("Insira o poder de ataque do atacante: ");

// Solicitando atributos do defensor

const char2 = prompt("Insira o nome do invocador defensor: ");
let lifePoints1 = prompt("Insira os pontos de vida do defensor: ");
const defensePower1 = prompt("Insira o poder de defesa do defensor: ");
const shield1 = prompt("O seu defensor possui escudo? {S/N}");

// Atribuindo o dano causado

let harmDamage = 0;

// Adicionando condições

if (attackPower1 > defensePower1 && shield1 === "N") {
  harmDamage = attackPower1 - defensePower1;
} else if (attackPower1 > defensePower1 && shield1 === "S") {
  harmDamage = (attackPower1 - defensePower1) / 2;
}

lifePoints1 -= harmDamage;

// Exibindo informações atualizadas

alert(char1 + " causou " + harmDamage + " de dano em " + char2 + ".");

alert(
  char1 +
    "\nPoder de ataque: " +
    attackPower1 +
    "\n\n" +
    char2 +
    "\nPontos de vida: " +
    lifePoints1 +
    "\nPoder de defesa: " +
    defensePower1 +
    "\nPossui escudo: " +
    shield1
);
