function setup() {
  createCanvas(500, 400);
  trackSound.loop();
}

function draw() {
  background(imgRoad);
  showActor();
  showCars();
  moveCars();
  moveActor();
  returnCars();
  checkCollision();
  scoreBoard();
  scorePoints();
}

