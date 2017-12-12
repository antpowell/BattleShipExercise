var attempPositions = [];
var hits = 0;
var board = new Array(64);

var fireShot = function () {
		var landingX = document.getElementById("xCoord");
		var landingY = document.getElementById("yCoord");
		var xError = document.getElementById("xCoordError");
		var yError = document.getElementById("yCoordError");


		if ((!(landingX.value == "") && !(landingY.value == ""))
				&& (landingX.value <= 7 && landingX.value >= 0)
				&& (landingY.value <= 7 && landingY.value >= 0)) {

				landingX.style.borderColor = '';
				landingY.style.borderColor = '';
				xError.innerHTML = "";
				yError.innerHTML = "";

				var firePosition = (landingY.value(8)) + landingX.value -1;

				console.log([Number(landingX.value), Number(landingY.value)]);
				shotAttempt = [Number(landingX.value), Number(landingY.value)];
				hitShip(firePosition);
				attempPositions.push([Number(landingX.value), Number(landingY.value)]);
				attemptCount ++

		} else {
				if (landingX.value == "" || landingX.value >= 8 || landingX.value < 0) {
						landingX.style.borderColor = 'red';
						xError.innerHTML = "Must enter a number between 0-7";
				}
				if (landingY.value == "" || landingY.value >= 8 || landingY.value < 0) {
						landingY.style.borderColor = 'red';
						yError.innerHTML = "Must enter a number between 0-7";
				}
		}
};

function generateShips() {
		if (isDirectionAcceptable(45, 5)) {
				console.log(true);
		} else {
				console.log(false);
		}
}

function hitShip(shotAttempt) {
		var commandMessage = document.getElementById("commandMessage");
		var sunkShip = document.getElementById("sunkShip");

		if(board[shotAttempt] === 1){
				commandMessage.innerHTML = "Hit, nice work commander!";
				console.log("Hit, nice work commander!");
				board[shotAttempt] = 0;
				if (!board.includes(1)){
						sunkShip.innerHTML = `Congradulations commander we have sunk the enemy ship!`;
						console.log(`Congradulations commander we have sunk the enemy ship!`);
				}
		}else{
				commandMessage.innerHTML = "We have missed commander. Lets try again!";
				console.log("We have missed commander. Lets try again!");
		}
		console.log(ship);
		console.log(shot);
		console.log(ship.includes(shot));

}

function isDirectionAcceptable(shipStart, direction) {
		/*
		* 1->N
		* 2->NE
		* 3->E
		* 4->SE
		* 5->S
		* 6->SW
		* 7->W
		* 8->NW
		* */
		if (shipStart % 8 <= 3) {
				switch (shipStart > 31) {
						case true:
								switch (direction) {
										//3rd quad
										case 3:
										case 1:
										case 2:
												return true;
										default:
												return false;
								}
								break;
						case false:
								switch (direction) {
										//1st quad
										case 3:
										case 4:
										case 5:
												return true;
										default:
												return false;
								}
				}
		} else if (shipStart % 8 >= 4) {
				switch (shipStart > 31) {
						case true:
								switch (direction) {
										// 4th quad
										case 1:
										case 8:
										case 7:
												return true;
										default:
												return false;
								}
								break;
						case false:
								switch (direction) {
										// 2nd quad
										case 3:
										case 2:
										case 1:
												return true;
										default:
												return false;
								}
				}
		}
}

