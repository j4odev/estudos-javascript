/* Proposta:

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir
por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido.

As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente
das disponíveis (use o break e o default para isso). */

//

// Solicitando e atribuindo os valores
const medida = prompt(
  "Em que medida o valor será convertido? \n \na) mm\nb) cm\nc) dm\nd) dam\ne) hm\nf) km"
);
const m = parseFloat(prompt("Insira o valor em metros (m): "));
let conv = undefined;

// Adicionando as condições utilizando switch

switch (medida) {
  case "a":
    conv = m / 0.001;
    alert(m + "m se torna " + conv + "mm.");
    break;

  case "b":
    conv = m / 0.01;
    alert(m + "m se torna " + conv + "cm.");
    break;

  case "c":
    conv = m / 0.1;
    alert(m + "m se torna " + conv + "dm.");
    break;

  case "d":
    conv = m / 10.0;
    alert(m + "m se torna " + conv + "dam.");
    break;

  case "e":
    conv = m / 100.0;
    alert(m + "m se torna " + conv + "hm.");
    break;

  case "f":
    conv = m / 1000.0;
    alert(m + "m se torna " + conv + "km.");
    break;

  default:
    alert("Insira uma opção válida.");
    break;
}
