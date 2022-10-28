let playerState = 'gethit';
const dropdown = document.getElementById('animations');

 dropdown.addEventListener('change', function(e){
     playerState = e.target.value;
     if(playerState == 'jump'){
        playerImage.src = './Jump.png';
    }
    if(playerState == 'fall'){
        playerImage.src = './Fall.png';
    }
    if(playerState == 'run'){
        playerImage.src = './Run.png';
    }
    if(playerState == 'Attack1'){
        playerImage.src = './Attack1.png';
    }
    if(playerState == 'Attack2'){
        playerImage.src = './Attack2.png';
    }
    if(playerState == 'Attack3'){
        playerImage.src = './Attack3.png';
    }
    if(playerState == 'ko'){
        playerImage.src = './Death.png';
    }
    if(playerState == 'gethit'){
        playerImage.src = './Take Hit.png';
    }
    if(playerState == 'idle'){
        playerImage.src = './Idle.png';
    }
 });

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();

// if(playerState == 'jump'){
//     playerImage.src = './Jump.png';
// }
// if(playerState == 'fall'){
//     playerImage.src = './Fall.png';
// }
// if(playerState == 'run'){
//     playerImage.src = './Run.png';
// }
// if(playerState == 'Attack1'){
//     playerImage.src = './Attack1.png';
// }
// if(playerState == 'Attack2'){
//     playerImage.src = './Attack2.png';
// }
// if(playerState == 'Attack3'){
//     playerImage.src = './Attack3.png';
// }
// if(playerState == 'ko'){
//     playerImage.src = './Death.png';
// }
// if(playerState == 'gethit'){
//     playerImage.src = './Take Hit.png';
// }
// if(playerState == 'idle'){
//     playerImage.src = './Idle.png';
// }

// playerImage.src = './Idle.png';
const spriteWidth = 160; //size of a single frameWidth
const spriteHeight = 111;//size of a single frameHeight
// let frameX = 0; //sprite frame array member horizontal
// let frameY = 0; // sprite frame array member vertical
let gameFrame = 0;
const staggerFrame = 5; //sets the speed of animation looping
const spriteAnimations =[];
const animationStates =[
    {
        name: 'idle',
        frames:8,
    },
    {
        name:'jump',
        frames:2,
    },
    {
        name:'fall',
        frames:2,
    },
    {
        name:'run',
        frames:8,
    },
    {
        name:'Attack1',
        frames:4,
    },
    {
        name:'Attack2',
        frames:4,
    },
    {
        name:'Attack3',
        frames:4,
    },
    // {
    //     name:'bite',
    //     frames:7,
    // },
    {
        name:'ko',
        frames:6,
    },
    {
        name:'gethit',
        frames:4,
    }
];
animationStates.forEach((state)=>{
    let frames = {
        loc:[],
    }
    for (let j = 0; j<state.frames;j++){
        let positionX = j * spriteWidth;
        let positionY = spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
    //animationStates[state.imageSrc] = playerImage;
});
console.log(spriteAnimations);

function animate(){
    //clears the rectangle
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);

    //more advanced animation loop Math.floor keeps it an integer value 
    let position = Math.floor(gameFrame /staggerFrame) % spriteAnimations[playerState].loc.length; //this value increases by 1 every time gameFrame increases by 5;
    let frameX = spriteWidth * position;
    let frameY = 0;
    
    //command        IMAGE    SourceX     SourceY  SourceWidth SourceHeight   destinationX   destinationY  destinationWidth destinationHeight
    ctx.drawImage(playerImage,   frameX , frameY ,    spriteWidth,spriteHeight,  0,              0,           CANVAS_WIDTH,    CANVAS_HEIGHT);
    
    //switches frames horizontally commented out code 
    // if(gameFrame% staggerFrame == 0){ //stagger frame variable is used here(will be true every 5 frames)
    // if (frameX < 6) frameX++;
    // else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

// spriteAnimations = [
//     "idle"={
//         loc:[
//             {x: 0, y:0},
//             {x:575, y:0},
//             {x:1150,y:0},
//             {x:1725,y:0},
//             {x:2300,y:0},
//             {x:2875,y:0},
//             {x:3450,y:0}
//         ]
//     },
//     "jump" ={
//         loc:[]

//     },
//     "run"={
//         loc:[]

//     }
// ];

// console.log(spriteAnimations["idle"].loc[2].x); //1150
// console.log(spriteAnimations["idle"].loc.length); //7
