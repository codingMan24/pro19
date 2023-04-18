var player;
var obstacle;
var obstacles
var ground;
var x
var gamestate
var score
function setup() {
    createCanvas(800,100)
    player = createSprite(50,50,20,20)
    ground = createSprite(400,95,800,10)
    obstacles = new Group()
    gamestate = 'play'
    score = 0
}
function createObstacles(){
    if(frameCount % 60 == 0){
        x = Math.round(random(10,25))
        obstacle = createSprite(900,85,x,x)
        obstacle.velocityX = -10
        obstacles.add(obstacle)
    }
}
function draw() {
    background('lightGray')
    text('Score: '+score,15,25)
    if(gamestate == 'play'){
        score +=1
        player.velocityY +=1.5
        createObstacles()
        if(keyDown('space') && player.collide(ground)){   
        player.velocityY = -10;
    }
    }
    if(player.isTouching(obstacles)){
        gamestate = 'over'
        obstacles.setVelocityXEach(0)
    }
    if(gamestate == 'over'){
        push()
        textSize(30)
        text('Game Over',300,50)
        pop()
    }
    player.collide(ground)  
    drawSprites()
}