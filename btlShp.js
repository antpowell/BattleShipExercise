/*(function () {
  generateShips();

}());*/



var attempPositions = [];
var hits =0;
function generateShips() {
  var Ship = document.getElementById("Ship");
    Ship = Ship.value;
    var res = Ship.split(",");
    var rowShip = res[0];
    var colShip = res[1];
    var Direction = res[2];
    
    switch(colShip){
        case 'a'||'A':
            colShip = 1
            break;
        case 'b'||'B':
            colShip = 2
            break;
        case 'c'||'C':
            colShip = 3
            break;
        case 'd'||'D':
            colShip = 4
            break;
        case 'e'||'E':
            colShip = 5
            break;
        case 'f'||'F':
            colShip = 6
            break;
        case 'g'||'G':
            colShip = 7
            break;
        case 'h'||'H':
            colShip = 8
            break;
                  }
    
 console.log(centerX, centerY);
    
    switch(Direction){
        case 1:
            colShip = 1
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart-8, shipStart-(2*8),shipStart-(3*8),shipStart-(4*8)];
            break;
        case 2:
            colShip = 2
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart-7, shipStart-(2*7),shipStart-(3*7),shipStart-(4*7)];
            break;
        case 3:
            colShip = 3
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart+1, shipStart+2,shipStart+3,shipStart+4];
            break;
        case 4
            colShip = 4
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart+9, shipStart+(2*9),shipStart+(3*9)shipStart+(4*9)];
            break;
        case 5
            colShip = 5
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart+8, shipStart+(2*8),shipStart+(3*8),shipStart+(4*8)];
            break;
        case 6
            colShip = 6
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart+7, shipStart+(2*7),shipStart+(3*7),shipStart+(4*7)];
            break;
        case 7
            colShip = 7
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart-1, shipStart-2,shipStart-3,shipStart-4];
            break;
        case 8
            colShip = 8
            var shipStart = [rowShip, colShip];
            ship = [shipStart, shipStart-9, shipStart-(2*9),shipStart-(3*9)shipStart-(4*9)];
            break;
                  }
                    
}
var fireShot = function () {

  var landingX = document.getElementById("xCoord");
  var landingY = document.getElementById("yCoord");
  var xError = document.getElementById("xCoordError");
  var yError = document.getElementById("yCoordError");
  if ((!(landingX.value == "") && !(landingY.value == ""))
    && (landingX.value <= 8 && landingX.value >= 1)
    && (landingY.value <= 8 && landingY.value >= 1)) {
    landingX.style.borderColor = '';
    landingY.style.borderColor = '';
    xError.innerHTML = "";
    yError.innerHTML = "";
    console.log([Number(landingX.value), Number(landingY.value)]);
    shotAttempt = [Number(landingX.value), Number(landingY.value)];
    hitShip(shotAttempt.toString(), ship.toString());
    attempPositions.push([Number(landingX.value), Number(landingY.value)]);
  } else {
    if (landingX.value == "" || landingX.value >= 8 || landingX.value < 1) {
      landingX.style.borderColor = 'red';
      xError.innerHTML = "Must enter a number between 1-8";
    }
    if (landingY.value == "" || landingY.value >= 8 || landingY.value < 1) {
      landingY.style.borderColor = 'red';
      yError.innerHTML = "Must enter a number between 1-8";
    }
  }

  // let attempt = prompt('Where would you like fire commander? (enter two number from 0-6. EX. 2,5)');
}



function hitShip(shot, ship) {
  var commandMessage = document.getElementById("commandMessage");
  var sunkShip = document.getElementById("sunkShip");
  console.log(ship);
  console.log(shot);
  console.log(ship.includes(shot));
  if (ship.includes(shot) && !attempPositions.toString().includes(shot)) {
    commandMessage.innerHTML = "Hit, nice work commander!";
    console.log("Hit, nice work commander!");
    console.log(`attempPositions ${attempPositions}`)
    hits++;
    if (hits == 3) {
      sunkShip.innerHTML = `Congradulations commander we have sunk the enemy ship!`;
      console.log(`Congradulations commander we have sunk the enemy ship!`);
      hits = 0;
    }
  } else if (attempPositions.toString().includes(shot)) {
    commandMessage.innerHTML = "We have already fired on that position commader try again.";
    console.log("We have already fired on that position commader try again.")
  } else {
    commandMessage.innerHTML = "We have missed commander. Lets try again!";
    console.log("We have missed commander. Lets try again!");
  }

}