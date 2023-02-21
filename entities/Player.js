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
        this.vel = 0.090;
    }
    drawPlayer(){
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    move(){
        //capta o evento do teclado para movimetar o player
        document.addEventListener('keydown',(event)=>{
            if(event.code == "ArrowRight"){
                if(this.x + this.width < canva_width){
                    this.x = this.x + this.vel;
                } 
            }
            if(event.code == "ArrowLeft"){
                if(this.x > 0){
                    this.x = this.x - this.vel;
                }
                
            }
            console.log(this.x);
            //console.log(this.vel);
        },false);
    }
}