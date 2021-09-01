class Player{
    constructor(){ 
this.index = null
this.distance = 0
this.name = null
}

display(){


    }

update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({
    Name:this.name,
    distance:this.distance

})


}
updateplayercount( count){
database.ref('/').update({

    playerCount: count


    
})
}

getcount(){
var playerCountref = database.ref('playerCount').on("value",(data)=>{
    playerCount = data.val()
})



}


playerinfo(){

var playerinforef = database.ref('players').on("value",(data)=>{
    allplayers = data.val();
})

}

}



