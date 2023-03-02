const canva_width = 950;
const canva_height = 750;

const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

export class Player{
    constructor(){
        this.x = 450;
        this.y = 700;
        this.width = 90;
        this.height = 15;
        this.vel = 35;
    }
    drawPlayer(){
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    
    moveDir(){
        if(this.x + this.width < canva_width){
            this.x = this.x + this.vel;
        } 
        this.drawPlayer();
    }
    movEsq(){
        if(this.x > 0){
            this.x = this.x - this.vel;
        }
        this.drawPlayer();
    }
}