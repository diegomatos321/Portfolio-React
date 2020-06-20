import background from "../../../uploads/assets/flappybird/imagens/Background.webp"
import chao from "../../../uploads/assets/flappybird/imagens/Floor.webp"
import pipeNorth from "../../../uploads/assets/flappybird/imagens/PipeNorth.webp"
import pipeSouth from "../../../uploads/assets/flappybird/imagens/PipeSouth.webp"
import birdSprite from "../../../uploads/assets/flappybird/imagens/BirdSprite.webp"
import coinSprite from "../../../uploads/assets/flappybird/imagens/CoinSprite.webp"
import enterBtn from "../../../uploads/assets/flappybird/imagens/Enter_btn.webp"
import gameOverScreen from "../../../uploads/assets/flappybird/imagens/GameOverScreen.webp"
import startMenuScreen from "../../../uploads/assets/flappybird/imagens/StartMenu.webp"
import flySfx from "../../../uploads/assets/flappybird/audios/fly.mp3"
import score_sfx from "../../../uploads/assets/flappybird/audios/score.mp3"

export function getImagens(){
  let imagens = [["background", background], ["chao", chao], ["pipeNorth_img", pipeNorth], ["pipeSouth_img", pipeSouth], ["bird_sprite", birdSprite], ["coin_sprite", coinSprite], ["enter_btn", enterBtn], ["gameOverScreen", gameOverScreen], ["startMenuScreen", startMenuScreen]]

  imagens = new Map(imagens);

  return imagens;
}

export function getAudios(){
  let audios = [["fly_sfx", flySfx], ["score_sfx", score_sfx]]

  audios = new Map(audios);

  return audios;
}


