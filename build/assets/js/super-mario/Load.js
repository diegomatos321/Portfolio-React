export default class LoadScene extends Phaser.Scene {
    constructor() {
        super("LoadScene")
    }

    init() {
        const { width, height } = this.sys.game.canvas;
        this.GAME_WIDTH = width;
        this.GAME_HEIGHT = height;
    }

    preload() {
        let loadingBar = this.add.image(this.GAME_WIDTH / 2 - 100, this.GAME_HEIGHT / 2, "loadingBar")
        loadingBar.setOrigin(0);

        let txtLoading = this.add.text(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2 + 24, "Loading...:")
        txtLoading.setOrigin(0.5);
        let txtLoadingPerc = this.add.text(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2, "0%")
        txtLoadingPerc.setOrigin(0.5);

        this.load.on('progress', function (value) {
            console.log(value);
            loadingBar.displayWidth = loadingBar.width * value
            txtLoadingPerc.setText(`${value.toFixed(2) * 100}%`)
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

        this.load.spritesheet("Mario Pequeno", "/assets/imagens/super-mario/Mario-Pequeno.webp", {
            frameWidth: 16, frameHeight: 16
        })

        this.load.spritesheet("Mario Grande", "/assets/imagens/super-mario/Mario-Grande.webp", {
            frameWidth: 16, frameHeight: 32
        })

        this.load.spritesheet("Luigi Pequeno", "/assets/imagens/super-mario/Luigi-Pequeno.webp", {
            frameWidth: 16, frameHeight: 16
        })

        this.load.spritesheet("Luigi Grande", "/assets/imagens/super-mario/Luigi-Grande.webp", {
            frameWidth: 16, frameHeight: 32
        })

        this.load.spritesheet("LittleGomba", "/assets/imagens/super-mario/Little-Gomba.webp", {
            frameWidth: 16, frameHeight: 16
        })

        this.load.spritesheet("surpriseBlock", "/assets/imagens/super-mario/surpriseBlock.webp", {
            frameWidth: 16, frameHeight: 16
        })

        this.load.spritesheet("coin", "/assets/imagens/super-mario/coin.webp", {
            frameWidth: 16, frameHeight: 16
        })

        this.load.spritesheet("KoopaTroopa", "/assets/imagens/super-mario/Koopa-Troopa.webp", {
            frameWidth: 16, frameHeight: 24
        })

        // IMAGENS PNG
        this.load.image("brick", "/assets/imagens/super-mario/brick.webp");
        this.load.image("magicMushroom", "/assets/imagens/super-mario/MagicMushroom.webp");
        this.load.image("mushroom", "/assets/imagens/super-mario/Mushroom.webp");
        this.load.image("starMan", "/assets/imagens/super-mario/Starman.webp");
        this.load.image("menuBanner", "/assets/imagens/super-mario/menu-banner.webp");
        this.load.image("menuPonteiro", "/assets/imagens/super-mario/menu-ponteiro.webp");
        this.load.image("brickParticle", "/assets/imagens/super-mario/brick-particle.webp");

        // TILEMAP

        this.load.tilemapTiledJSON("world-1-1", "/assets/tilemap/super-mario/world1-1.json");
        this.load.tilemapTiledJSON("menu", "/assets/tilemap/super-mario/menu.json");

        // TILESET  

        this.load.image("tileset", "/assets/tilemap/super-mario/tileset.webp")

        // AUDIO FILES

        this.load.audio("jumpSmallSFX", "/assets/audio/super-mario/smb_jump-small.mp3");
        this.load.audio("jumpSuperSFX", "/assets/audio/super-mario/smb_jump-super.mp3");
        this.load.audio("powerupAppearsSFX", "/assets/audio/super-mario/smb_powerup_appears.mp3");
        this.load.audio("powerUpSFX", "/assets/audio/super-mario/smb_powerup.mp3");
        this.load.audio("coinSFX", "/assets/audio/super-mario/smb_coin.mp3");
        this.load.audio("bumpSFX", "/assets/audio/super-mario/smb_bump.mp3");
        this.load.audio("backgroundMusic", "/assets/audio/super-mario/BackgroundMusic.mp3")
        this.load.audio("gameOverSFX", "/assets/audio/super-mario/smb_gameover.mp3");
        this.load.audio("breakBlockSFX", "/assets/audio/super-mario/smb_breakblock.mp3");
        this.load.audio("world_clear", "/assets/audio/super-mario/smb_world_clear.mp3");
    }

    create() {
        // ANIMAÇÕES DO JOGADOR

        this.criarAnimacaoDoMario();
        this.criarAnimacaoDoLuigi();

        // BLOCOS INTERATIVOS

        this.anims.create(
            {
                key: "Surprise Block Ativo",
                frames: this.anims.generateFrameNumbers("surpriseBlock", { start: 0, end: 3 }),
                frameRate: 7,
                repeat: -1,
                repeatDelay: 10
            });

        // INIMIGOS

        this.anims.create(
            {
                key: "Surprise Block Inativo",
                frames: [{ key: "surpriseBlock", frame: 4 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Little Gomba Walking",
                frames: this.anims.generateFrameNumbers("LittleGomba", { start: 0, end: 1 }),
                frameRate: 8,
                repeat: -1
            });

        this.anims.create(
            {
                key: "Little Gomba Dead",
                frames: [{ key: "LittleGomba", frame: 2 }],
                duration: 500,
                repeat: 0
            });
        this.anims.create(
            {
                key: "Koopa Troopa Walking",
                frames: this.anims.generateFrameNumbers("KoopaTroopa", { start: 0, end: 1 }),
                frameRate: 8,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Koopa Troopa Defend",
                frames: [{ key: "KoopaTroopa", frame: 2 }],
                duration: 500,
                repeat: 0
            });

        // HUD

        this.anims.create(
            {
                key: "Coin 1",
                frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 2 }),
                frameRate: 6,
                repeat: -1
            });

        this.add.text(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2 + 48, "Pressione ENTER").setOrigin(0.5);
        let enterKey = this.input.keyboard.addKey("ENTER");
        enterKey.on('down', function () {
            this.scene.start("MenuScene")
        }, this)
    }

    criarAnimacaoDoMario() {
        // MARIO
        this.anims.create(
            {
                key: "Mario Pequeno Walking",
                frames: this.anims.generateFrameNumbers("Mario Pequeno", { start: 6, end: 7 }),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Pequeno Jump",
                frames: [{ key: "Mario Pequeno", frame: 1 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Pequeno Idle",
                frames: [{ key: "Mario Pequeno", frame: 0 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Pequeno Changing Direction",
                frames: [{ key: "Mario Pequeno", frame: 5 }],
                frameRate: 10,
                repeat: -1
            });

        this.anims.create(
            {
                key: "Mario Pequeno Dead",
                frames: [{ key: "Mario Pequeno", frame: 2 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Grande Walking",
                frames: this.anims.generateFrameNumbers("Mario Grande", { start: 7, end: 9 }),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Grande Jump",
                frames: [{ key: "Mario Grande", frame: 1 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Grande Idle",
                frames: [{ key: "Mario Grande", frame: 0 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Mario Grande Changing Direction",
                frames: [{ key: "Mario Grande", frame: 6 }],
                frameRate: 10,
                repeat: -1
            });
    }

    criarAnimacaoDoLuigi() {
        // LUIGI
        this.anims.create(
            {
                key: "Luigi Pequeno Idle",
                frames: [{ key: "Luigi Pequeno", frame: 0 }],
                frameRate: 10,
                repeat: -1
            });

        this.anims.create(
            {
                key: "Luigi Pequeno Jump",
                frames: [{ key: "Luigi Pequeno", frame: 1 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Luigi Pequeno Dead",
                frames: [{ key: "Luigi Pequeno", frame: 2 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Luigi Pequeno Walking",
                frames: this.anims.generateFrameNumbers("Luigi Pequeno", { start: 6, end: 7 }),
                frameRate: 10,
                repeat: -1
            });

        this.anims.create(
            {
                key: "Luigi Pequeno Changing Direction",
                frames: [{ key: "Luigi Pequeno", frame: 5 }],
                frameRate: 10,
                repeat: -1
            });

        this.anims.create(
            {
                key: "Luigi Grande Walking",
                frames: this.anims.generateFrameNumbers("Luigi Grande", { start: 7, end: 9 }),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Luigi Grande Jump",
                frames: [{ key: "Luigi Grande", frame: 1 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Luigi Grande Idle",
                frames: [{ key: "Luigi Grande", frame: 0 }],
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: "Luigi Grande Changing Direction",
                frames: [{ key: "Luigi Grande", frame: 6 }],
                frameRate: 10,
                repeat: -1
            });


    }
}