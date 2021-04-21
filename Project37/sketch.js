var player,gameState,form,game,speed;
var PLAYER = [];
function setup (){
    createCanvas(displayWidth-20,displayHeight-30);
    player = new Player(displayWidth/2+25,displayHeight/2+300,60,60);
    game = new Game();
    PLAYER = [player];
    gameState = 0;
    
}

function draw(){
    background(255,350,89);
    player.start();
    form.display();
    game.play();

    drawSprites();
}