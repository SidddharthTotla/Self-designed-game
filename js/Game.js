class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      });
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          
          Form = new form();
          Form.display();
          player1 = createSprite(displayWidth/20,displayHeight - 100,10,10);
          player2 = createSprite(displayWidth - 190 , displayHeight -100,10,10);
          players = [player1,player2];
        }
      }
       
    pl1(){
      Form.hide();

      background(151,81,12);

      player1.debug = true;
      player2.debug = true;

      var maze1 = createSprite(displayWidth/2,displayHeight/2 + 70,5,800);
      var maze2 = createSprite(displayWidth - displayWidth ,displayHeight/2,50,800);
      var maze3 = createSprite(displayWidth - 20,displayHeight/2,50,800);
      var maze4 = createSprite(displayWidth/20 - 5,displayHeight/40,500,50);
      var maze5 = createSprite(displayWidth - 45,displayHeight/40,500,50);
      var maze6 = createSprite(displayWidth/2,displayWidth - 20,800,50);
      var maze7 = createSprite(displayWidth/2,displayHeight - 150,200,50);
      var maze8 = createSprite(displayWidth/2 - 90 ,displayHeight/4 - 20,30,600);
      var maze9 = createSprite(displayWidth/2 + 90,displayHeight/4 - 20,30,600);
      var maze10 = createSprite(displayWidth/4 - 60,displayHeight - 200,20,800);
      var maze11 = createSprite(displayWidth - 240,displayHeight - 200,20,800);
      var maze12 = createSprite(displayWidth/8 - 40,displayHeight - 150,40,40);
      var maze13 = createSprite(displayWidth/20,displayHeight/2 + 100,80,60);
      var maze14 = createSprite(displayWidth/6,displayHeight/2 - 30,80,60);
      var maze15 = createSprite(displayWidth/10 ,displayHeight/4,5,100);
      var maze16 = createSprite(displayWidth/40,displayHeight/5 - 10,205,5);
      //var maze17 = createSprite(displayWidth/5 - 60,displayHeight/10 - 20,200,100);
      //var maze18 = createSprite(displayWidth/5 - 60, displayHeight/2 - 30,40,200);
      var maze17 = createSprite(displayWidth/2 - 180,displayHeight/2 + 180,40,40);
      var maze18 = createSprite(displayWidth/2 - 280, 0, 400,85);
      var maze19 = createSprite(displayWidth/2 + 280, 0, 400,85);
      //player2
      var maze20 = createSprite(displayWidth/2 + 180,displayHeight/2 + 180,40,40);
      var maze21 = createSprite(displayWidth/2 + 180,displayHeight/2 - 30,40,200);
      var maze22 = createSprite(displayWidth/2 + 180,displayHeight/10 - 20,200,100);
      var maze23 = createSprite(displayWidth - 20,displayHeight/5 - 10,205,5);
      var maze24 = createSprite(displayWidth - 120,displayHeight/4,5,100);
      var maze25 = createSprite(displayWidth - 190,displayHeight/2 - 30,80,60);
      var maze26 = createSprite(displayWidth - 80,displayHeight/2 + 100,80,60);
      var maze27 = createSprite(displayWidth - 120, displayHeight - 150,40,40);


      var maze28 = createSprite(displayWidth/2 - 180,displayHeight/2 + 180,40,40);
      var maze29 = createSprite(displayWidth/2 - 180,displayHeight/2 - 30,40,200);
      var maze30 = createSprite(displayWidth/2 - 180,displayHeight/10 - 20,200,100);
      var maze31 = createSprite(displayWidth + 20,displayHeight/5 - 10,205,5);
      var maze32 = createSprite(displayWidth + 120,displayHeight/4,5,100);
      var maze33 = createSprite(displayWidth + 160,displayHeight/2 - 30,80,60);
      var maze34 = createSprite(displayWidth + 80,displayHeight/2 + 100,80,60);
      var maze35 = createSprite(displayWidth + 120, displayHeight - 150,40,40);

      var mazeGroup = new Group();

      mazeGroup.add(maze1);
      mazeGroup.add(maze2);
      mazeGroup.add(maze3);
      mazeGroup.add(maze4);
      mazeGroup.add(maze5);
      mazeGroup.add(maze6);
      mazeGroup.add(maze7);
      mazeGroup.add(maze8);
      mazeGroup.add(maze9);
      mazeGroup.add(maze10);
      mazeGroup.add(maze11);
      mazeGroup.add(maze12);
      mazeGroup.add(maze13);
      mazeGroup.add(maze14);
      mazeGroup.add(maze15);
      mazeGroup.add(maze16);
      mazeGroup.add(maze17);
      mazeGroup.add(maze18);
      mazeGroup.add(maze19);
      mazeGroup.add(maze20);
      mazeGroup.add(maze21);
      mazeGroup.add(maze22);
      mazeGroup.add(maze23);
      mazeGroup.add(maze24);
      mazeGroup.add(maze25);
      mazeGroup.add(maze26);
      mazeGroup.add(maze27);
      mazeGroup.add(maze28);
      mazeGroup.add(maze29);
      mazeGroup.add(maze30);
      mazeGroup.add(maze31);
      mazeGroup.add(maze32);
      mazeGroup.add(maze33);
      mazeGroup.add(maze34);
      mazeGroup.add(maze35);

      mazeGroup.setColorEach("green");
      if(mazeGroup.isTouching(player1)){
        mazeGroup.collide(player1);
      }
      if(mazeGroup.isTouching(player2)){
        mazeGroup.collide(player2);
      }
      
      

      Player.getPlayerInfo();
      //console.log(allPlayers)
      if(allPlayers !== undefined){
        var index =0
        
        for (var plr in allPlayers){
          index++
          if(index === player.index){
            player.x = players[index-1].x;
            player.y = players[index-1].y;
            this.movePlayer();
          }
          players[index-1].x = allPlayers[plr].x;
          players[index-1].y = allPlayers[plr].y;
         
        
        }
             
      }
      drawSprites();

      
      /*1)create maze for player 1 and 2 
      2)movement of both the players. 
      3)rotation of the players
      4)spawning obstacles.
      5)shooting
      6)collision of the obstacles
      7)change state and extra points. Also destroy the sprites*/  
    }  


    pl2(){
      /*1)Add a water background, change player image
      2)add obstacles
      3)check collision
      4)player movement
      5)change state*/

      //Creating the player one sprite and setting its animation. 
      var player1 = createSprite(100, 350,5,5);
      //player1.setAnimation("playerShip3_blue_1");
      //Scaling down player one
      player1.scale=0.7;
      //Setting player one's collider
      player1.setCollider("circle",0,0,40);
       
       //Creating the player two sprite and setting its animation.
      var player2 = createSprite(300, 350,5,5);
      //player2.setAnimation("playerShip3_green_1");
      //Scaling down player two
      player2.scale=0.7;
      //Setting player two's collider
      player2.setCollider("circle",0,0,40);
      
      //Creating the button to start and setting its animation.
      var start = createSprite(200,360,10,10);
      //start.setAnimation("pieceYellow_multi10_1");
      start.scale=0.8;
      
      //Creating variable for game state.
      var START = 2;
      var PLAY = 1;
      var END = 0;
      //Setting the game state to start.
      var gameState=START; 
      
      //Setting the players score to zero
      // score1 = 0;
      // score2 = 0;
      
      //Creating the group for planes.
      var planesGroup = new Group();
      
       createCanvas(400,400);
        //Setting a background colour.
       background("lightblue");
       
       //Displaying the instructions.
      if(gameState===START){  
       instructions(); 
      }
      
      //Starting the game
      if(gameState===START&&mousePressedOver(start)){
        gameState=PLAY;
      }
      
      //Conditions while playing the game.
      if (gameState===PLAY){
      //Making the start button disappear during the game.
       start.visible= false;
      //Setting the control keys.
       controlKeys(); 
      //Spawning the planes
       spawnPlanes();
      //Creating a points system.
       points();
      //Colliding the jet with the bottom edge.
       //limits();
      //Bringing the players back to original position after touching the plane.
       respawnPlayer();
      //Creating conditions for adding score.
       score();
      }
      
      //Condition to win
     // if(score1===5||score2===5){
      //  gameState=END;
     // }
      
      //Ending the game
     // if (gameState===END){
       //reset();
     // }
      
      //Condition to restart the game
      if (mousePressedOver(start)){
       replay();
      }
      
      drawSprites();
      }
      
       spawnPlanes(){
      //Spawning planes after every 50 frames.
      if(World.frameCount%50===0){
      //Creating the plane sprite
        var plane = createSprite(0,200,10,10);
      //Random number to set the plane animation.
       // var r = randomNumber(1,4);
      //Setting the pane animation
        //plane.setAnimation("plane"+r);
      //Randomizing the spawning point of the plane
        plane.y= random(0,300);
      //Setting plane velocity
        plane.velocityX=2;
      //Scaling down the plane
        plane.scale=0.3;
      //Setting thw lifetime for plane to avoid memory leak
        plane.lifetime=200;
      //Adding the plane sprite to the plane's group
        planesGroup.add(plane);
        }
      //Creating a similar condition to spawn planes from both the sides
      if(World.frameCount%50===0){
        var Plane = createSprite(400,200,10,10);
       // var p = randomNumber(5,8);
       // Plane.setAnimation("plane"+p);
        Plane.y=random(0,300);
        Plane.lifetime=200;
        Plane.velocityX=-2;
        Plane.scale=0.3;
        planesGroup.add(Plane);
      }
      
        
      }
      
       controlKeys(){
      //Moving player one up when up arrow is pressed
        if(keyWentDown("UP_ARROW")){
          player1.velocityY = -3;
        }
      //Stopping player one from moving up when up arrow is released
        if (keyWentUp("UP_ARROW")) {
           player1.velocityY = 0;
        }
      //Moving player one down when down arrow is pressed
        if (keyWentDown("DOWN_ARROW")) {
           player1.velocityY = 3;
        }
      //Stopping player one from moving down when down arrow is released
        if (keyWentUp("DOWN_ARROW")) {
           player1.velocityY = 0;
        }
      /*//Moving player one up when 'w' is pressed
         if(keyWentDown("w")){
          player2.velocityY = -3;
        }
      //Stopping player one from moving up when 'w' is released
        if (keyWentUp("w")) {
           player2.velocityY = 0;
        }
      //Moving player one down when 's' is pressed 
        if (keyWentDown("s")) {
           player2.velocityY = 3;
        }
      //Stopping player one from moving down when 's' is released
        if (keyWentUp("s")) {
           player2.velocityY = 0;
        }*/
      
      }
      
     /* function points(){
      //Creating conditions to increase score
        if(player1.y<0){
          score1=score1+1;
          player1.y=350;
        }
        if(player2.y<0){
          score2=score2+1;
          player2.y=350;
        }
        
        
      }*/
      
       limits(){
      //Not allowing the players to fall off
        createEdgeSprites();
        player1.collide(bottomEdge);
        player2.collide(bottomEdge);
      }
      
       respawnPlayer(){
      //Condition to bring the players back to original position
        if(player1.isTouching(planesGroup)){
          player1.y=350;
        }
        if(player2.isTouching(planesGroup)){
          player2.y=350;
        }
      }
      
       reset(){
      //Making the start button reappear.
         start.visible=true;
      //Destroying the planes
        planesGroup.destroyEach();
      //Making player two disappear
        player2.visible=false;
      //Setting the excited kid animation
        player1.setAnimation("kid_34_excited_1");
      //Setting the position of the animation 
        player1.x=200;
        player1.y=200;
        player1.velocityY=0;
      //Scaling down the animation
        player1.scale=0.5;
      //Instructing the players to restart
        textSize(30);
        text("Game Over!!!",120,40);
        text("Press the button to restart",30,340);
      }
      
      replay(){
      //Setting game state to play
        gameState=PLAY;
      //Setting scores back to zero
        score1=0;
        score2=0;
      //Setting the player positions
        player1.y=350;
        player1.x=80;
        player2.y=350;
      //Resetting the player animations
       // player1.setAnimation("playerShip3_blue_1");
      //Making player two visible again
        player2.visible=true;
      //Setting velocity to zero to use arrow keys
        player1.velocityY=0;
        player2.velocityY=0;
      }
      
       instructions(){
      //Instructions before starting the game
       textSize(20);
       text("Use arrow keys to move blue ship", 50, 55);
       text("Use WS keys to move green ship",50,150);
       text("Press the yellow button to start",55,255); 
      }
      
       score(){
      //Creating the score board
       textSize(20);
       line(200,0,200,400);
       text(score1, 170, 360);
       text(score2, 215, 360);
      }


    //gameOver(){
      /*1)display winning message
        2)
      */
   // }  
   

    movePlayer(){
      console.log("move");
      console.log(player.index);
    if(keyIsDown(UP_ARROW)){
      player.velocityY = -5;
    }
    if(keyIsDown(DOWN_ARROW)){
      player.velocityY = 5;
    }
    if(keyIsDown(LEFT_ARROW)){
      player.velocityX = -5;
    }
    if(keyIsDown(RIGHT_ARROW)){
      player.velocityX = 5;
    }
    /*if(keyIsDown(LEFT_ARROW)){
      player.rotation(90);
    }
    if(keyIsDown(RIGHT_ARROW)){
      player.rotation(270);
    }*/
    player.update();
  }

}
