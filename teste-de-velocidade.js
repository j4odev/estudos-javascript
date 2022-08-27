// Teste de velocidade

// Solicitando os atributos do veículo 1
const vehicle1 = prompt("Nome do veículo 1: ");
const vel1 = prompt("Velocidade do veículo 1: ");

// Solicitando os atributos do veículo 2
const vehicle2 = prompt("Nome do veículo 2: ");
const vel2 = prompt("Velocidade do veículo 2: ");

// Exibindo resultados:
if (vel1 > vel2) {
  alert(
    vehicle1 +
      " possui velocidade de " +
      vel1 +
      " km e é mais rápido que " +
      vehicle2 +
      "."
  );
} else if (vel2 > vel1) {
  alert(
    vehicle2 +
      " possui velocidade de " +
      vel2 +
      " km e é mais rápido que " +
      vehicle1 +
      "."
  );
} else {
  alert(vehicle1 + " e " + vehicle2 + " possuem a mesma velocidade.");
}
