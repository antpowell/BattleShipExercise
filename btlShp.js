var attempPositions = [];
var hits = 0;
var board = new Array(64);
var attemptCount = 0;
var attemptText = document.getElementById("attempts");

function generateShips() {
		
    var rows = document.getElementById('ship-placement-input').value.split("\n").length;
    
    
    
    while(rows > 0){
    var Ship = document.getElementById("ship-placement-input");
		var invalidDirectionMessageText = document.getElementById("commandMessage");

		Ship = Ship.value;
		//var res = Ship.split(",");
		var colShip = Ship.substr(0, 1);
		var rowShip = Ship.substr(1, 1);
		var Direction = Ship.substr(3, 1);
        alert(colShip);
        alert(rowShip);
        alert(Direction);
        
		switch (Direction) {
				case 'a' || 'A':
						colShip = 1
						break;
				case 'b' || 'B':
						colShip = 2
						break;
				case 'c' || 'C':
						colShip = 3
						break;
				case 'd' || 'D':
						colShip = 4
						break;
				case 'e' || 'E':
						colShip = 5
						break;
				case 'f' || 'F':
						colShip = 6
						break;
				case 'g' || 'G':
						colShip = 7
						break;
				case 'h' || 'H':
						colShip = 8
						break;
		}
        
		var xship = rowShip - 1;
		xship *= 8;
		xship += colShip -1;
		var shipStart = xship;

		console.log(shipStart);
		console.log(Direction);
        console.log(isDirectionAcceptable(shipStart, Number(Direction)));
		if (isDirectionAcceptable(shipStart, Number(Direction))) {
				invalidDirectionMessageText.innerHTML = "";
				console.log(`ship was created commander.`);
				switch (Number(Direction)) {
						case 1:
								board[shipStart] = 1;
								board[shipStart - 8] = 1;
								board[shipStart - (2 * 8)] = 1;
								board[shipStart - (3 * 8)] = 1;
								board[shipStart - (4 * 8)] = 1;
								break;
						case 2:
								board[shipStart] = 1;
								board[shipStart - 7] = 1;
								board[shipStart - (2 * 7)] = 1;
								board[shipStart - (3 * 7)] = 1;
								board[shipStart - (4 * 7)] = 1;
								break;
						case 3:
								board[shipStart] = 1;
								board[shipStart + 1] = 1;
								board[shipStart + 2] = 1;
								board[shipStart + 3] = 1;
								board[shipStart + 4] = 1;
								break;
						case 4:
								board[shipStart] = 1;
								board[shipStart + 9] = 1;
								board[shipStart + (2 * 9)] = 1;
								board[shipStart + (3 * 9)] = 1;
								board[shipStart + (4 * 9)] = 1;
								break;
						case 5:
								board[shipStart] = 1;
								board[shipStart + 8] = 1;
								board[shipStart + (2 * 8)] = 1;
								board[shipStart + (3 * 8)] = 1;
								board[shipStart + (4 * 8)] = 1;
								break;
						case 6:
								board[shipStart] = 1;
								board[shipStart + 7] = 1;
								board[shipStart + (2 * 7)] = 1;
								board[shipStart + (3 * 7)] = 1;
								board[shipStart + (4 * 7)] = 1;
								break;
						case 7:
								board[shipStart] = 1;
								board[shipStart - 1] = 1;
								board[shipStart - 2] = 1;
								board[shipStart - 3] = 1;
								board[shipStart - 4] = 1;
								break;
						case 8:
								board[shipStart] = 1;
								board[shipStart - 9] = 1;
								board[shipStart - (2 * 9)] = 1;
								board[shipStart - (3 * 9)] = 1;
								board[shipStart - (4 * 9)] = 1;
								break;
				}
				console.log(board)
		} else {
				invalidDirectionMessageText.innerHTML = "Invalid ship placement Commander, all your troops were lost...";
		}
        rows--;
}
}
var fireShot = function () {
		var landingX = document.getElementById("xCoord");
		var landingY = document.getElementById("yCoord");
		var xError = document.getElementById("xCoordError");
		var yError = document.getElementById("yCoordError");
		var attemptText = document.getElementById("attempts");


		if ((!(landingX.value == "") && !(landingY.value == ""))
				&& (landingX.value <= 7 && landingX.value >= 0)
				&& (landingY.value <= 7 && landingY.value >= 0)) {

				landingX.style.borderColor = '';
				landingY.style.borderColor = '';
				xError.innerHTML = "";
				yError.innerHTML = "";

				var firePosition = landingY.value*8;
						firePosition += landingX.value - 1;

				console.log([Number(landingX.value), Number(landingY.value)]);
				shotAttempt = [Number(landingX.value), Number(landingY.value)];
				hitShip(firePosition);
				attempPositions.push([Number(landingX.value), Number(landingY.value)]);
				attemptCount++

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
		attemptText.innerHTML = Number(attemptCount);

};

function hitShip(shotAttempt) {
		var commandMessage = document.getElementById("commandMessage");
		var sunkShip = document.getElementById("sunkShip");

		if (board[shotAttempt] === 1) {
				commandMessage.innerHTML = "Hit, nice work commander!";
				console.log("Hit, nice work commander!");
				board[shotAttempt] = 0;
				if (!board.includes(1)) {
						sunkShip.innerHTML = `Congradulations commander we have sunk the enemy ship!`;
						console.log(`Congradulations commander we have sunk the enemy ship!`);
						attemptText.innerHTML = `Your score is ${5/attemptCount}`;
				}
		} else {
				commandMessage.innerHTML = "We have missed commander. Lets try again!";
				console.log("We have missed commander. Lets try again!");
		}
};

function isDirectionAcceptable(shipStart, direction) {
		console.log(`I have ${shipStart}, ${direction}`);
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
};