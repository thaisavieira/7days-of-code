/*
O objetivo deste exercício é entender como capturar e armazenar valores dentro de variáveis.
Ele deve pedir para o usuário responder 3 perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

const nome = prompt ("Qual o seu nome?");
const idade = prompt ("Quantos anos você tem?");
const linguagemProgramacao = prompt ("Qual linguagem de programação você está estudando?");
const mensagem = ("Olá " + nome + " você tem " + idade + " anos e já está aprendendo " + linguagemProgramacao + "!");
alert(mensagem);
const userGostaEstudarLinguagem = prompt ("Você gosta de estudar " + linguagemProgramacao + "? Responda com o número 1 para SIM ou 2 para NÃO.")
if (userGostaEstudarLinguagem == 1){
    const mensagem1 = alert("Muito bom! Continue estudando e você terá muito sucesso.");}
if ( userGostaEstudarLinguagem == 2){
    const mensagem2 = alert("Ahh que pena... Já tentou aprender outras linguagens?");}