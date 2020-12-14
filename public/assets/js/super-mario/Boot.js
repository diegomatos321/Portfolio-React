export default class BootScene extends Phaser.Scene{
    constructor(){
        super("BootScene")
    }

    preload(){
        this.load.image("loadingBar", "/assets/imagens/super-mario/loadingBar.webp")
    }

    create(){
        this.scene.start("LoadScene");
    }
}