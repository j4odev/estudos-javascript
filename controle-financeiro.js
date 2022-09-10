/* proposta 1: Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis,
as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções
uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o
programa é finalizado. */

do {
  option = prompt(
    "Selecione uma opção: \n\n1. Abrir\n2. Fechar\n3. Maximizar\n4. Minimizar\n5. Encerrar Janela"
  );

  switch (option) {
    case "1":
      alert("Você escolheu a opção 1.");
      break;
    case "2":
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      alert("Você escolheu encerrar a janela.");
      alert("Janela sendo encerrada...");
  }
} while (option !== "5");

/* proposta 2: Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade
juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade
a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro
deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

alert("Olá, economista!");
alert("Vou te ajudar a realizar cálculos simples.");

qntdInicial = parseFloat(prompt("Qual a sua quantia inicial?"));
let total = qntdInicial;

do {
  option = prompt(
    "A sua quantia atual é de R$" +
      total +
      "." +
      "\n\nSelecione uma opção: \n\n1. Adicionar quantia\n2. Remover quantia\n3. Encerrar"
  );

  switch (option) {
    case "1":
      addMoney = parseFloat(prompt("Quantidade a ser adicionada:"));
      total = qntdInicial + addMoney;
      break;

    case "2":
      delMoney = parseFloat(prompt("Quantidade a ser removida:"));
      total = qntdInicial - delMoney;
      break;

    case "3":
      alert("Você escolheu encerrar.");
      alert("Encerrando...");
      break;

    default:
      alert("Insira uma opção válida.");
  }
} while (option !== "3");
