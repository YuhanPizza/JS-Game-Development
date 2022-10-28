/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 50;
const enemiesArray =[];

let gameFrame = 0;
//class enemy
class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';


        //this.speed = Math.random()* 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;       
        this.width = this.spriteWidth /2.5;
        this.height = this.spriteHeight/2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3+ 1);        
        this.x = Math.random()*(canvas.width - this.width); //randomly generated position
        this.y = Math.random()*(canvas.height - this.height); //randomly generated position
    }
    //animation update from first position
    update(){
            this.x+= Math.random()*15 - 7.5;
            this.y+= Math.random()*10 - 5;
            //animate sprites;
            if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0: this.frame++;
            }
    }
    //draw method
    draw(){ 
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight, this.x, this.y,this.width, this.height);
    }
};
//pushes the new enemy into enemiesarray
for(let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy=>{
        enemy.draw();
        enemy.update();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();