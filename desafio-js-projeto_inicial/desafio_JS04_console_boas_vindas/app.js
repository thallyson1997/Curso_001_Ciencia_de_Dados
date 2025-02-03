alert("Bem vindo ao quarto desafio!");
//Crie um programa que utilize o console.log para exibir uma
//mensagem de boas-vindas.
alert("Questão 01");
console.log("Boas-vindas!!");

//Crie uma variável chamada "nome" e atribua a ela o seu nome.
//Em seguida, utilize o console.log para exibir a mensagem
// "Olá, [seu nome]!" no console do navegador.
alert("Questão 02");
let nome = "Thallyson";
console.log("Olá, " + nome + "!");

//Crie uma variável chamada "nome" e atribua a ela o seu nome.
//Em seguida, utilize o alert para exibir a mensagem
// "Olá, [seu nome]!".
alert("Questão 03");
let nome2 = prompt("Qual o seu nome?");
alert(`Olá, ${nome2}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem
//de programação que você mais gosta?. Em seguida, armazene a
//resposta em uma variável e mostre no console do navegador.
alert("Questão 04");
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagem);

//Crie uma variável chamada "valor1" e outra chamada "valor2",
//atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a soma desses dois valores e armazene o
// resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A soma de
// [valor1] e [valor2] é igual a [resultado]." no console.
alert("Questão 05");
let valor1 = 3;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado);

//Crie uma variável chamada "valor1" e outra chamada "valor2",
//atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e 
//armazene o resultado em uma terceira variável chamada 
//"resultado". Utilize o console.log para mostrar a mensagem 
//"A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
alert("Questão 06");
let valor3 = 9;
let valor4 = 3;
let resultado2 = valor3 - valor4;
console.log("A diferença entre " + valor3 + " e " + valor4 + " é igual a " + resultado2);

//Peça ao usuário para inserir sua idade com prompt. Com base 
//na idade inserida, utilize um if para verificar se a pessoa 
//é maior ou menor de idade, exibindo uma mensagem apropriada 
//no console.
alert("Questão 07");
let idade = prompt('Qual a sua idade?');
if (idade >= 18){
    alert("Você é maior de idade")
} else{
    alert("Você não é maior de idade")
};

//Crie uma variável "numero" e peça um valor com prompt
//verifique se é positivo, negativo ou zero. Use if-else para
//imprimir a respectiva mensagem.
alert("Questão 08");
let numero = prompt("Digite um número:");
if (numero > 0){
    alert("O número " + numero + " é positivo");
} else{
    if (numero < 0){
        alert("O número " + numero + " é negativo");
    } else {
        alert("O número " + numero + " é zero");
    }
};

//Use um loop while para imprimir os números de 1 a 10 no
//console.
alert("Questão 09");
let count = 1;
while (count <= 10){
    console.log(count)
    count++
};

//Crie uma variável "nota" e atribua um valor numérico a ela.
//Use if-else para determinar se a nota é maior ou igual a 7 e
//exiba "Aprovado" ou "Reprovado" no console.
alert("Questão 10");
let nota = 7;
if (nota >= 7){
    console.log("Aprovado");
}else {
    console.log("Reprovado");
};

//Use o Math.random para gerar qualquer número aleatório e
//exiba esse número no console.
alert("Questão 11");
let randomico = Math.random();
console.log(randomico);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e 
//exiba esse número no console.
alert("Questão 12");
let randomico2 = Math.random();
console.log(parseInt(randomico2 * 10) + 1);

//Use o Math.random para gerar um número inteiro entre 1 e 1000
//e exiba esse número no console.
alert("Questão 13");
let randomico3 = Math.random();
console.log(parseInt(randomico3 * 1000) + 1);