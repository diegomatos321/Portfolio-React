export default class LoadScene extends Phaser.Scene{
    constructor(){
        super("LoadScene")
    }

    preload(){
        this.canvas = this.sys.game.canvas;
        
        let loadingBar = this.add.sprite(this.canvas.width/2-100, this.canvas.height/2, "loadingBar")
        loadingBar.setOrigin(0);

        let txtLoading = this.add.text(this.canvas.width/2, this.canvas.height/2 + 24, "Loading...:")
        txtLoading.setOrigin(0.5);
        let txtLoadingPerc = this.add.text(this.canvas.width/2, this.canvas.height/2, "0%")
        txtLoadingPerc.setOrigin(0.5);

        this.load.on('progress', function (value) {
            console.log(value);
            loadingBar.displayWidth = loadingBar.width * value
            txtLoadingPerc.setText(`${value*100}%`)
        });
                    
        this.load.on('fileprogress', function (file) {
            txtLoading.setText(`Loading...: ${file.key}`)
            console.log(file.src);
        });
         
        this.load.on('complete', function () {
            txtLoading.setText(`Loading...: Completed !`);
            console.log('complete');
        });

        // SPRITE SHEETS
        this.load.spritesheet("Inimigo", "/assets/imagens/jogo-da-nave/inimigo.webp", {
            frameWidth: 92, frameHeight: 100
        })
        this.load.spritesheet("Jogador", "/assets/imagens/jogo-da-nave/player.webp", {
            frameWidth: 39, frameHeight: 43
        })
        this.load.spritesheet("ExplosaoSFX", "/assets/imagens/jogo-da-nave/explosion.webp", {
            frameWidth: 16, frameHeight: 16
        })

        // IMAGENS webp
        this.load.image("Fundo", "/assets/imagens/jogo-da-nave/background.webp")
        this.load.image("Tiro", "/assets/imagens/jogo-da-nave/tiro.webp");

        // AUDIO FILES

        this.load.audio("engineSFX", "/assets/audio/jogo-da-nave/engine_sound.mp3");
        this.load.audio("explosionSFX", "/assets/audio/jogo-da-nave/explosion_sound.mp3");
        this.load.audio("shootSFX", "/assets/audio/jogo-da-nave/shoot_sound.mp3");
        this.load.audio("startUpSFX", "/assets/audio/jogo-da-nave/start-up_sound.mp3");
    }
    
    create(){
        this.add.text(this.canvas.width/2, this.canvas.height/2 + 48, "Pressione ENTER").setOrigin(0.5);
        let enterKey = this.input.keyboard.addKey("ENTER");
        enterKey.on('down', function () {
            this.scene.start("MenuScene")
        }, this)
    }
}