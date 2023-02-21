//classe Bullet para o objeto que quebrará os os blocos
const canva_width = 950;
const canva_height = 750;

const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

 export class Bullet{
    constructor(){
        this.image = new Image();
        this.image.src = "./bola.png"
        this.x = 700;
        this.y = 400;
        this.width = 25;
        this.height = 15;
        this.velX = 2.5;
        this.velY = 1.8;
        this.spriteWidth = 40;
        this.spriteHeight = 20;
    }
    movement(){
        //incrementa as cooerdenadas x e y do objeto
        this.x += this.velX;
        this.y += this.velY;
        if(this.x + this.width > canva_width ){
           this.velX *= -1;
        }
        if(this.y + this.height > canva_height){
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
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = "#000000";
        //ctx.drawImage(this.image,0,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}
