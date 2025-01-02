const acende = document.getElementById('acende');
const apagar = document.getElementById('apaga');
const mensagemLampadaApagada = document.getElementsByClassName('mensagem')
const lampadaApagada = document.getElementById('lampadaApagada');
const img = document.querySelector('img');
const lampadaQuebrada = 'false';

document.addEventListener('DOMContentLoaded', () => {

    const text = document.createElement('p');
    text.textContent = 'A lampada foi quebrada.'

    interacaoLampada();
    quebraLampada();
    desativaBotoes()
})

function interacaoLampada() {
    acende.addEventListener('click', () => {
        lampadaApagada.setAttribute("src", "img/lampada-acessa.png");
    })
    apagar.addEventListener('click', () => {
        lampadaApagada.setAttribute("src", "img/lampada-apagada.png");
    })
}

function quebraLampada() {
    img.addEventListener('click', () => {
        lampadaApagada.setAttribute("src", "img/lampada-quebrada.png");

        if (lampadaQuebrada) {
            acende.disabled = true;
            apagar.disabled = true;
        }
    })
}



