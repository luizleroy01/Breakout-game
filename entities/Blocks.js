const BLOCK_WIDTH = 75;
const BLOCK_HEIGHT = 50;

const canva = document.getElementById("canvas1");
//pegando o context, 2d pois o jogo será 2d
const ctx = canva.getContext("2d");

//classe para os blocos que serão destruidos
export class Blocks{
    constructor(value,x,y){
        this.value = value;
        this.width = BLOCK_WIDTH;
        this.height = BLOCK_HEIGHT;
        this.x = x;
        this.y = y;
    }
    drawBlock(color){
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.strokeRect(this.x,this.y,this.width,this.height);
    }
    
    
}