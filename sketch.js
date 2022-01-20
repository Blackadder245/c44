var gamestate=0
var bg


function preload() {
  bgImage=loadImage("assets/space pic 1.jpg")
  back=loadImage("assets/spacepic3.jpg")
  spaceshipImage=loadImage("assets/spaceshippic3.png")
  
}

function setup() {
createCanvas(500,800)
bg=createSprite(250,400)
startButton=createSprite(250,550,100,70)
mainplayer=createSprite(250,400)
edges=createEdgeSprites()
mainplayer.addImage(spaceshipImage)
mainplayer.scale=0.7
bg.addImage(back)
bg.scale=0.8

 
}

function draw() {
  background("blue")
  if(gamestate===0){ 
    textSize(30)
    text("SPACESHIP ESCAPE",100,300)
    if(mousePressedOver(startButton)){
      gamestate=1
      bg.addImage(bgImage)
      startButton.visible=false
    }
  }
  if(gamestate===1){
    if(keyDown("left")){
      mainplayer.x-=2
    }
    if(keyDown("right")){
      mainplayer.x+=2
    }
    if(keyDown("up")){
      mainplayer.velocityY=-5
    }
    mainplayer.velocityY+=0.1
    mainplayer.collide(edges[0])
    mainplayer.collide(edges[1])
    
  }

  
drawSprites()
}
