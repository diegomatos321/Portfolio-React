import * as mainGame from "./game.js"
import Galeria from "./galeria.js"

import { getImagens, getAudios } from "./ImagensESons"

const formularioContainer = document.getElementById("formulario-container");
const fatherContainer = document.getElementById("jogo-container")
const gameScreen = document.getElementById("game-screen");

// add an appropriate event listener
window.addEventListener("startGame", iniciarOJogo);

CarregarArquivos = () => {
    const imagens = getImagens();
    const audios = getAudios();

    imagens.forEach((value, key) => {
        Galeria.CarregarImagem(key, value, function () {
            formularioContainer.classList.toggle("hidden");
            console.log("show")

            // Remove o element responsável por aparecer loading ao usuário
            let divLoading = document.getElementById("loading-txt");
            fatherContainer.removeChild(divLoading);
        })
    });

    audios.forEach((value, key) => {
        Galeria.CarregarAudio(key, value, function () {
            formularioContainer.classList.toggle("hidden");

            // Remove o element responsável por aparecer loading ao usuário
            let divLoading = document.getElementById("loading-txt");
            fatherContainer.removeChild(divLoading);
        })
    });

}

iniciarOJogo = (data) => {
    fatherContainer.scrollIntoView(true);

    mainGame.jogador.score = data.score;
    mainGame.jogador.highScore = data.highScore;
    mainGame.jogador.nome = data.nome;

    formularioContainer.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
    mainGame.Game.init();
}

CarregarArquivos();