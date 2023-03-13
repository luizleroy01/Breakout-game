//classe Bullet para o objeto que quebrará os os blocos
const canva_width = 950;
const canva_height = 750;
const BLOCK_HEIGHT = 75;
const DISTANCE = 4.5;

const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

const audioBulletTouch = new Audio('./Sounds/bulletToch.mp3');

 export class Bullet{
    constructor(){
        this.image = new Image();
        this.image.src = "./bola.png"
        this.x = 700;
        this.y = 300;
        this.width = 25;
        this.height = 15;
        this.velX = 2.5;
        this.velY = 1.8;
        this.spriteWidth = 40;
        this.spriteHeight = 20;
        this.isTouch = false;
    }
    movement(){
        //incrementa as cooerdenadas x e y do objeto
        this.x += this.velX;
        this.y += this.velY;
        if(this.x + this.width > canva_width ){
           this.velX *= -1;
           if(this.y > (4*(BLOCK_HEIGHT+DISTANCE))){
                this.isTouch  = false;
           }
           audioBulletTouch.play();
        }
        if(this.y + this.height > canva_height){
            this.velY *= -1;
            this.isTouch  = false;
            audioBulletTouch.play();
        }
        if(this.x < 0){
            this.velX *= -1;
            if(this.y > (4*(BLOCK_HEIGHT+DISTANCE))){
                this.isTouch  = false;
            }
           audioBulletTouch.play();
            
        }
        if(this.y < 0 ){
            this.velY *= -1;
           audioBulletTouch.play();
        }
        
    }
    draw(){
        //desenha a bullet no retangulo
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = "#000000";
        //ctx.drawImage(this.image,0,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }

    touchWallOrPlayer(){
        return this.isTouch;
    }
}
