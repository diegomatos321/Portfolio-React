import Game from "./stage.js"

let parent = document.getElementById("game-screen");

let config = {
    width: 400,
    height: 400,
    parent: parent,
    engine: "Canvas"
}

let game = new Game(config);