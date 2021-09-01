class Game{
constructor(){


}



getstate(){
    var gameStateref = database.ref('gameState').on("value",(data)=>{
        gameState = data.val()
    })
    
    
    
    }
    
    updategameState(state){
        database.ref('/').update({
          gameState:state      
        })
        }


async start(){

if(gameState===0){
    player = new Player();
    var playerCountref = await database.ref('playerCount').once("value")
if(playerCountref.exists()){

playerCount = playerCountref.val()
player.getcount()


}


form = new Form()
form.display();
}

}


play(){
form.hide()
text("GameStarted",350,350)
car1 = createSprite(500,200,20,20)
car2 = createSprite(400,200,20,20)
car3 = createSprite(600,200,20,20)
car4 = createSprite(700,200,20,20)


drawSprites();
}


}