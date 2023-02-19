/** @type{HTMLCanvasElement} */
const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

CANVAS_WIDTH = canva.width = 950;
CANVAS_HEIGHT = canva.height = 750;
const BLOCK_WIDTH = 75;
const BLOCK_HEIGHT = 50;


//classe Bullet para o objeto que quebrará os os blocos
class Bullet{
    constructor(){
        this.image = new Image();
        this.image.src = "bola.png"
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 30;
        this.velX = 2.5;
        this.velY = 1.8;
        this.spriteWidth = 40;
        this.spriteHeight = 20;
    }
    movement(){
        //incrementa as cooerdenadas x e y do objeto
        this.x += this.velX;
        this.y += this.velY;
        if(this.x + this.width > canva.width ){
           this.velX *= -1;
        }
        if(this.y + this.height > canva.height){
            this.velY *= -1;
        }
        if(this.x < 0){
            this.velX *= -1;
        }
        if(this.y < 0 ){
            this.velY *= -1;
        }
        
    }
    draw(){
        //desenha a bullet no retangulo
        ctx.drawImage(this.image,0,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}

//classe para os blocos que serão destruidos
class Blocks{
    constructor(value,x,y){
        this.value = value;
        this.width = BLOCK_WIDTH;
        this.height = BLOCK_HEIGHT;
        this.x = x;
        this.y = y;
    }
    drawBlock(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    
    
}
const bullet = new Bullet();
const yellowBlocks = [];
const redBlocks = [];
const blueBlocks = [];
const greenBlocks = [];
var position = 0;
var distance = 5;

for(let i =  0 ; i < 15 ; i++){
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
    //loop para movimentação da bullet e desenhar os blocos na tela
    //apagar a posição anterior da bullet e redesenhar em uma nova posição
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

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
    requestAnimationFrame(animate);
}
animate();