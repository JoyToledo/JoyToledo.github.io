//Images
let imgRoad;
let imgActor;
let imgCar1;
let imgCar2;
let imgCar3;

//Sounds
let trackSound;
//let scoreSound;
let collisionSound;

function preload(){
  imgRoad = loadImage("images/road.png")
  imgActor = loadImage("images/actor1.png")
  imgCar1 = loadImage("images/car1.png");
  imgCar2 = loadImage("images/car2.png");
  imgCar3 = loadImage("images/car3.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3]
  
  trackSound = loadSound("sounds/soundtrack.mp3");
  scoreSound = loadSound ("sounds/score.wav");
  collisionSound = loadSound ("sounds/collided.mp3");

}