/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 200;
const enemiesArray =[];

let gameFrame = 0;
//class enemy
class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy3.png';


        //this.speed = Math.random()* 4 - 2;
        this.spriteWidth = 218;
        this.spriteHeight = 177;       
        this.width = this.spriteWidth /2.5;
        this.height = this.spriteHeight/2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3+ 1);        
        this.x = Math.random()*(canvas.width - this.width); //randomly generated position
        this.y = Math.random()*(canvas.height - this.height); //randomly generated position
        this.angle = 0;
        //generates a value between 0 to given number
        //controls speedGrowth
        this.angleSpeed = Math.random()* 1.5 + 0.5;
        //determines the radius of the circle
        this.curve = Math.random() * 200 + 50; 
    }
    //animation update from first position
    update(){
            //creating periodical horizontal movement
            //sin(angle) = opposite / hypotenuse
            this.x = canvas.width/2* Math.cos(this.angle* Math.PI/180) + (canvas.width/2 - this.width/2);
            //creating periodical vertical values
            //cos(angle) = adjacent / hypotenuse
            this.y = canvas.height/2 * Math.sin(this.angle* Math.PI/90) + (canvas.height/2 - this.height/2);
            //controls the speed of movement
            this.angle += this.angleSpeed;
            //animate sprites;
            if(this.x + this.width < 0) this.x = canvas.width;
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