const areaAtuacao = prompt("Se você deseja seguir para a área de Front-End digite 1 mas se você deseja seguir para a área de Back-End digite 2.");
if (areaAtuacao == 1) {
    const mensagemFrontEnd = ("Você escolheu  seguir a área de Front-End.");
    alert(mensagemFrontEnd);
    const questionamentoTecnologiaFrontEnd = prompt("Caso queira aprender React digite 1 mas caso queira aprender Vue digite 2.");
    if (questionamentoTecnologiaFrontEnd == 1) {
        const mensagemReact = ("Você escolheu seguir a área de Front-End e aprender React.");
        alert(mensagemReact);
    }
    else if (questionamentoTecnologiaFrontEnd == 2) {
        const mensagemVue = ("Você escolheu seguir a área de Front-End e aprender Vue.");
        alert(mensagemVue);
    }
}

else if (areaAtuacao == 2) {
    const mensagemBackEnd = ("Você escolheu  seguir a área de Back-End.");
    alert(mensagemBackEnd);
    const questionamentoTecnologiaBackEnd = prompt("Caso queira aprender C# digite 1 mas caso queira aprender Java digite 2.");
if (questionamentoTecnologiaBackEnd == 1) {
    const mensagemCSharp = ("Você escolheu seguir a área de Back-End e aprender C#.");
    alert(mensagemCSharp);
}
else if (questionamentoTecnologiaBackEnd == 2) {
    const mensagemJava = ("Você escolheu seguir a área de Back-End e aprender Java.");
    alert(mensagemJava);
}
}
else {
    const mensagemErro = ("Ops! Parece que você digitou algo diferente de 1 ou 2. Vamos tentar novamente.");
    alert(mensagemErro);
}

const estudoContinuado = prompt("Em quesito de especialização, digite 1 se preferir a sua área ou 2 se preferir se tornar FullStack.")
if (estudoContinuado == 1) {
    const mensagemEspecializacao = ("Você irá se tornar um exelente especilista na sua área");
    alert(mensagemEspecializacao);
}
else if (estudoContinuado == 2) {
    const mensagemFullstack = ("Você irá se tornar um excelente profissional Fullstack");
    alert(mensagemFullstack);
}
else {
const mensagemErro = ("Ops! Parece que você digitou algo diferente de 1 ou 2. Vamos tentar novamente.");
alert (mensagemErro);
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}