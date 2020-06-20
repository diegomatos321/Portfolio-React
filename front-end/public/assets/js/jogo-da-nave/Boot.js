export default class BootScene extends Phaser.Scene{
    constructor(){
        super("BootScene")
    }

    preload(){
        this.load.image("loadingBar", "/assets/imagens/jogo-da-nave/loadingBar.webp")
    }

    create(){
        this.scene.start("LoadScene");
    }
}