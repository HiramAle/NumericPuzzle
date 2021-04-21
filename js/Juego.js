var movesCount = 0;



function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	movesCount = 0;
	var movesLabel = document.getElementById("playermoves");
	movesLabel.innerHTML = movesCount;
	stopTimer();

}

function cambiarCasillas(casilla1, casilla2) {
	var casillaTemp = document.getElementById(casilla1).className;

	document.getElementById(casilla1).className = document.getElementById(casilla2).className;
	document.getElementById(casilla2).className = casillaTemp;

}



function increaseMoves() {
	var movesLabel = document.getElementById("playermoves");
	movesCount++;
	movesLabel.innerHTML = movesCount;
}


function sepuedemover() {
	let casillaaux = document.getElementById("tile-9").className;
	let salida = [];
	switch (casillaaux) {
		case "tile posicion1":
			salida = ["tile posicion2", "tile posicion4"];
			break;
		case "tile posicion2":
			salida = ["tile posicion1", "tile posicion3", "tile posicion5"];
			break;
		case "tile posicion3":
			salida = ["tile posicion2", "tile posicion6"];
			break;
		case "tile posicion4":
			salida = ["tile posicion1", "tile posicion5", "tile posicion7"];
			break;
		case "tile posicion5":
			salida = ["tile posicion2", "tile posicion4", "tile posicion6", "tile posicion8"];
			break;
		case "tile posicion6":
			salida = ["tile posicion3", "tile posicion5", "tile posicion9"];
			break;
		case "tile posicion7":
			salida = ["tile posicion4", "tile posicion8"];
			break;
		case "tile posicion8":
			salida = ["tile posicion5", "tile posicion7", "tile posicion9"];
			break;
		case "tile posicion9":
			salida = ["tile posicion6", "tile posicion8"];
			break;
		default:
			salida = [];
			break;
	}
	return salida;
}

function clickCasilla(idCasilla) {
	var casilla = "tile-" + idCasilla;
	var casilla2 = document.getElementById("tile-" + idCasilla).className;
	let clickCasillaaux;

	clickCasillaaux = sepuedemover();


	for (let i = 0; i < clickCasillaaux.length; i++) {
		if (casilla2 == clickCasillaaux[i]) {
			cambiarCasillas("tile-9", casilla);
			increaseMoves();
		}
	}
	console.log(clickCasillaaux);
	checkIfWin();
	return;
}

function playGame() {
	var nameInput = document.getElementById("inputname");
	var nameLabel = document.getElementById("playername");
	var nameLabel4x4 = document.getElementById("playername4x4");
	var matrixmode = document.getElementById("3x3");
	var div3x3game = document.getElementById("div-game3x3");
	if (nameInput.value != "") {
		if (matrixmode.checked) {
			div3x3game.style.display = "block";
			startTimer();
			document.getElementById("div-game3x3").scrollIntoView();
			nameLabel.innerHTML = nameInput.value;
			shuffle();
		}else{
			div3x3game.style.display = "none";
			document.getElementById("div-game4x4").scrollIntoView();
			
			nameLabel4x4.innerHTML = nameInput.value;
			startTimer();
		}



	} else {

		alert("You forgot to write your name");
	}
}

function shuffle() {

	for (var row = 1; row < 9; row++) {
		var row2 = Math.floor(Math.random() * 8 + 1);
		cambiarCasillas("tile-" + row, "tile-" + row2);
	}
}

window.onload = () => {
	m = 0;
	s = 0;
	timeStarted = 0;
}

function changeTime() {
	var time = document.getElementById("timer");
	var time4x4 = document.getElementById("timer4x4");
	let secs = 0;
	let min = 0;
	s++;
	if (s > 59) {
		m++;
		s = 0;
	}
	secs = ('0' + s).slice(-2);
	min = ('0' + m).slice(-2);
	time.innerHTML = `${min}:${secs}`;
	time4x4.innerHTML = `${min}:${secs}`;
}

function startTimer() {
	changeTime();
	timeStarted = setInterval(changeTime, 1000);
}

function stopTimer() {
	clearInterval(timeStarted);
	m = 0;
	s = 0;
}

function checkIfWin() {
	var order = document.getElementById("Up");
	var arrayId = [];
	var arrayClassName = [];

	if (order.checked) {
		for (var j = 1; j < 10; j++) {
			arrayId[j - 1] = document.getElementById("tile-" + j).id;
			arrayClassName[j - 1] = document.getElementById("tile-" + j).className;
		}
		var count = 0;
		for (var k = 1; k < 10; k++) {
			if (arrayClassName[k - 1] == "tile posicion" + k) {
				count++;
				console.log(count);
			}
		}

		if (count == 9) {
			showModal();
			stopTimer();
		}
	} else {

	}

	


}
var modal = document.getElementById("modal");

window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
}

function showModal (){
	var nameInput = document.getElementById("inputname");
	var name = document.getElementById("modalUsername");
	modal.style.display = "block";
	name.innerHTML = nameInput.value;
}

