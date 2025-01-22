let listaDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {;
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : ' tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        tentativa++;
        liparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteado = [];
    }

    if (listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;
    }
}

function liparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    liparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}