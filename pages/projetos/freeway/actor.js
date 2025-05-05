//Código do ator

let yActor = 366;
let xActor = 200;
let hit = false
let myScore = 0;

function showActor(){
    image(imgActor, xActor, yActor, 30, 30);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
   yActor -= 3; 
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(canMoveY())
   yActor += 3; 
  }
  
 if(keyIsDown(LEFT_ARROW)){
    if(xActor > 0){
      xActor -= 3;  
    }   
  }  
   if(keyIsDown(RIGHT_ARROW)){
    if(xActor < 470){
      xActor += 3;  
    }   
  }  
}

function checkCollision(){
  for(let i = 0; i < imgCars.length; i = i = i + 1){
    hit = collideRectCircle(xCars[i], yCars[i], lengthCars, widthCars, xActor, yActor, 15)
     if(hit){
      backStart();
       collisionSound.play();
       if(greatestZero()){
        myScore -= 1;
      }
    }
  }
}

function backStart(){
  yActor = 366;
}

function scoreBoard(){
  fill(color(47,79,79));
  textAlign(CENTER);
  textSize(30);
  text(myScore, width / 5, 29);
}

function scorePoints(){
  if (yActor < 15){
    myScore +=1;
    scoreSound.play();
    backStart();    
  }
  
}

function greatestZero(){
  return myScore > 0 
}

function canMoveY(){
  return yActor < 366;
}  
  