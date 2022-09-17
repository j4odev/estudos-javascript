// Utilizada a estrutura de repetição "for"
// Exercício de fixação do conteúdo

var nMultiplicador = 0

let n = prompt('// Tabuada Multiplicadora //\n\nDigite o valor (1-20) a ser multiplicado:')

for (; n <= '20', n>=1, nMultiplicador<=20; nMultiplicador++) {
  r = n * nMultiplicador;
  alert(n + " * " + nMultiplicador + " = " + r)
} 

alert('Encerrando a aplicação!')
