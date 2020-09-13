class Player {
    constructor(){
        this.index = null;
        this.velocityX = 0;
        this.name = null;
        this.velocityY = 0;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            velocityX : this.velocityX,
            velocityY : this.velocityY 
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}
   