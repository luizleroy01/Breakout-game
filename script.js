/** @type{HTMLCanvasElement} */
const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

const CANVAS_WIDTH = canva.width = 950;
const CANVAS_HEIGHT = canva.height = 750;
const BLOCK_WIDTH = 75;
const BLOCK_HEIGHT = 50;
var placarJogo = 0;
var playerLife = 3;

import { Bullet } from "./entities/Bullet.js";
import { Blocks } from "./entities/Blocks.js";
import { Player } from "./entities/Player.js";


const bullet = new Bullet();
const yellowBlocks = [];
const redBlocks = [];
const blueBlocks = [];
const greenBlocks = [];
const player = new Player();

var position = 0;
var distance = 4.5;



for(let i =  0 ; i < 12 ; i++){
    //blocos amarelos
    yellowBlocks.push(new Blocks(2,position,0));
    
    //blocos vermelhos
    redBlocks.push(new Blocks(3,position,(BLOCK_HEIGHT + distance)));

    //blocos azuis
    blueBlocks.push(new Blocks(4,position,2 * (BLOCK_HEIGHT + distance)));

    //blocos verdes
    greenBlocks.push(new Blocks(5,position, 3 * (BLOCK_HEIGHT + distance)));

    position = position + BLOCK_WIDTH + distance;
}


//animação para movimentação da bullet
function animate(){
    if(playerLife < 0 ){
        alert('perdeu');
        let endGame = document.getElementById('looseGame');
        endGame.style.opacity = 1;
       
        return;

    }
    
    //loop para movimentação da bullet e desenhar os blocos na tela
    //apagar a posição anterior da bullet e redesenhar em uma nova posição
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    //desenha o player
    player.drawPlayer();

    //desenha os blocos amarelos
    yellowBlocks.forEach(blocks =>{blocks.drawBlock("#FFFF00");});
    //desenha os blocos vermelhos
    redBlocks.forEach(blocks =>{blocks.drawBlock("#FF4500");});
    //desenha os blocos verdes
    greenBlocks.forEach(blocks =>{blocks.drawBlock("#00FF00");});
    //desenha os blocos azuis
    blueBlocks.forEach(blocks =>{blocks.drawBlock("#0000FF");});
 
    bullet.movement();
    bullet.draw();
    looseLife();
    
    requestAnimationFrame(animate);
}
animate();

//função responsável por checar a colisão entre a bullet e o bloco e excluir
//os blocos
function checkCollision(){

    //colisão com os blocos verdes
    greenBlocks.forEach(blocks =>{
        if(bullet.x > (blocks.x + blocks.width) ||
            (bullet.x + bullet.width) < blocks.x ||
            bullet.y > (blocks.y + blocks.height) ||
            (bullet.y + bullet.height) < blocks.y){
                //não houve colisão
                //wconsole.log("nao colidiu");
            }else{
                //houve colisão
                //inverte a velocidade vertical da bullet
                bullet.velY *= -1;
                //busca o indice do bloco que a bullet colidiu e o 
                //exclui utilizando a função splice
                placarJogo += blocks.value;
                document.getElementById('pontuacao').innerHTML = placarJogo;
                let index = greenBlocks.indexOf(blocks);
                greenBlocks.splice(index,1);
            }
            
    });
    //colisão com os blocos azuis
    blueBlocks.forEach(blocks =>{
        if(bullet.x > (blocks.x + blocks.width) ||
            (bullet.x + bullet.width) < blocks.x ||
            bullet.y > (blocks.y + blocks.height) ||
            (bullet.y + bullet.height) < blocks.y){
                //nada ocorre
            }else{
                bullet.velY *= -1;
                placarJogo += blocks.value;
                document.getElementById('pontuacao').innerHTML = placarJogo;
                let index = blueBlocks.indexOf(blocks);
                blueBlocks.splice(index,1);
            }
            
    });
    //colisão com os blocos vermelhos
    redBlocks.forEach(blocks =>{
        if(bullet.x > (blocks.x + blocks.width) ||
            (bullet.x + bullet.width) < blocks.x ||
            bullet.y > (blocks.y + blocks.height) ||
            (bullet.y + bullet.height) < blocks.y){
                //nada ocorre
            }else{
                bullet.velY *= -1;
                placarJogo += blocks.value;
                document.getElementById('pontuacao').innerHTML = placarJogo;
                let index = redBlocks.indexOf(blocks);
                redBlocks.splice(index,1);
            }
            
    });
    //colisão com os blocos amarelos
    yellowBlocks.forEach(blocks =>{
        if(bullet.x > (blocks.x + blocks.width) ||
            (bullet.x + bullet.width) < blocks.x ||
            bullet.y > (blocks.y + blocks.height) ||
            (bullet.y + bullet.height) < blocks.y){
                //nada ocorre
            }else{
                bullet.velY *= -1;
                placarJogo += blocks.value;
                document.getElementById('pontuacao').innerHTML = placarJogo;
                let index = yellowBlocks.indexOf(blocks);
                yellowBlocks.splice(index,1);
            }
            
    });

            if(bullet.x > (player.x + player.width) ||
                (bullet.x + bullet.width) < player.x ||
                bullet.y > (player.y + player.height) ||
                (bullet.y + bullet.height) < player.y){
                //não houve colisão com o player
                //console.log("sem colisão com o player");

            }else{
                //inverte a velocidade vertical da bullet
                bullet.velY *= -1;
            }
    requestAnimationFrame(checkCollision);
}
checkCollision();

function blockCollision(blocks){
 // fazer...
 // função que recebe um array de blocos e verifica se houve colisão com a bullet
}

function movePlayer(){
    let direita = document.getElementById('movDireita');
    let esquerda = document.getElementById('movEsquerda');
    
    direita.addEventListener('click',function(event){
        player.moveDir();
        
    })
    
    esquerda.addEventListener('click',function(event){
        player.movEsq();
    })
    
}

movePlayer();

function looseLife(){
    if((bullet.y + bullet.height) > CANVAS_HEIGHT){
        playerLife--;
        if(playerLife >= 0){
            let vida = document.getElementsByClassName('vida')[playerLife];
            vida.style.display = "none";
        }
        
    }
}



