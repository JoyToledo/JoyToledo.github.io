//Código do carro
let yCars = [40, 90, 150, 210, 270, 318];//lista
let xCars = [600, 600, 600, 600, 600, 600];
let carsSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3]
let lengthCars = 50;
let widthCars = 40


function showCars(){
  for(let i = 0; i < imgCars.length; i = i + 1){
    image(imgCars[i], xCars[i], yCars[i], lengthCars, widthCars);
   
  }
}


function moveCars(){
  for(let i = 0; i < xCars.length; i = i + 1){
      xCars[i] -= carsSpeed[i];
  }
}


function returnCars(){
  for(let i = 0; i < imgCars.length; i = i + 1){
  if (endScreen(xCars[i])){
    xCars[i] = 600;
  } 
 }
}

function endScreen(xCars){
  return xCars < -50;
}

