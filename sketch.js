
var database;
var playerCount = 0;
var form;
var game;
var player;
var distance = 0;
var allplayers
var gameState = 0
var car1,car2,car3,car4,cars;

function setup(){
database=firebase.database()
    createCanvas(windowWidth,windowHeight);



game = new Game()
game.getstate()
game.start()



}

function draw(){
    background("red");

if(playerCount===4){

    game.updategameState(1)
}


if(gameState===1){
    game.play()
}






    // display.Sprites();
}
