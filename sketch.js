var canvas, backgroundImage1;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player1,player2;
var players;

var Form,player,game;

function preload(){
    backgroundImage1 = loadImage("background1.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===2){
        game.update(1);

    }
    switch(gameState){
        case 1 : game.pl1();
        break;
        case 2 : game.pl2();
        break;
        case 3 : game.end();
        break;
        default: break;
    }
}