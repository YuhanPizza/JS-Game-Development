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
        this.image.src = 'enemy4.png';
        this.speed = Math.random()* 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 212;       
        this.width = this.spriteWidth /2.5;
        this.height = this.spriteHeight/2.5;
        this.x = Math.random()*(canvas.width - this.width); //randomly generated position
        this.y = Math.random()*(canvas.height - this.height); //randomly generated position
        this.newX = Math.random()* canvas.width; //randomized new position inside of canvas
        this.newY = Math.random()* canvas.height;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3+ 1); //math that floor rounds them down to be whole numbers
        this.interval = Math.floor(Math.random()* 200 + 50); 
    }
    //animation update from first position
    update(){
            if(gameFrame % this.interval === 0){
                this.newX = Math.random()*(canvas.width - this.width);
                this.newY = Math.random()*(canvas.height - this.height);
            }
            let dx = this.x - this.newX;
            let dy = this.y - this.newY;
            this.x -= dx/70; //current position is always moving to new position by 70th of their
            this.y -= dy/70; // distance for every animation frame 
            //this.x = 0;
            //this.y = 0;
            if(this.x + this.width < 0)this.x = canvas.width;
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