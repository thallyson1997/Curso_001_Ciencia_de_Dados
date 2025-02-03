//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
//Caso contrário, mostre "Boa semana!".
alert("Bem vindo ao segundo desafio!");
alert("Questão 01");
let dia = prompt("Qual é o dia da semana:");
if (dia == "Sábado"){
    alert("Bom fim de semana!");
} else {
    if (dia == "Domingo"){
        alert("Bom fim de semana!");
    } else {
        alert("Boa semana!");
    }
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
alert("Questão 02");
let numero = prompt("Digite um numero:");
if ((numero % 2) == 0){
    alert("É par!");
} else {
    alert ("É impar!");
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".
alert("Questão 03");
let pontuacao = 125;
if (pontuacao >= 100){
    alert("Sua pontuação é: " + pontuacao + ". Parabéns, você venceu!");
} else{
    alert("Sua pontuação é: " + pontuacao + ". Tente novamente para ganhar.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
alert("Questão 04");
let saldo = 1200;
alert("Seu saldo na conta é: " + saldo + ",00 R$");

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert("Questão 05");
let seu_nome = prompt("Qual o seu nome?");
alert("Seja bem vindo, " + seu_nome + "!!!");