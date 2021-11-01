//create a template for each pokemon
//[Object Blueprint Template]
function Pokemon(name, lvl, front, back, imageSelect, type) {
	this.name = name;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = './images/' + front; // we need to get the full path of the image
	this.imageBack = './images/' + back;
	this.imageSelect = './images/' + imageSelect;
	this.type = './images/' + type;
};

//create a template for each battlefield
function Battlefield(bg, name) {
	this.background = './images/' + bg;
	this.name = name;
};

//list of playable characters
const venusaur = new Pokemon('Venusaur', 50, 'venusaurFront.gif', 'venusaurBack.gif', '1iconVenusaur.png', 'typeGrass.png');
const charizard = new Pokemon('Charizard', 50, 'charizardFront.gif', 'charizardBack.gif', '2iconCharizard.png', 'typeFire.png');
const blastoise = new Pokemon('Blastoise', 50, 'blastoise.gif', 'blastoiseBack.gif', '3iconBlastoise.png', 'typeWater.png');
const pikachu = new Pokemon('Pikachu', 50, 'pikachuFront.gif', 'pikachuBack.gif', '4iconPikachu.png', 'typeElectric.png');
const snorlax = new Pokemon('Snorlax', 50, 'snorlaxFront.gif', 'snorlaxBack.gif', '5iconSnorlax.png', 'typeNormal.png');
const gengar = new Pokemon('Gengar', 50, 'gengarFront.gif', 'gengar.gif', '6iconGengar.png', 'typeGhost.png');
const dragonite = new Pokemon('Dragonite', 50, 'dragoniteFront.gif', 'dragoniteBack.gif', '7iconDragonite.png', 'typeDragon.png');
const mewtwo = new Pokemon('Mewtwo', 50, 'mewtwo.gif', 'mtBack.gif', '8iconMewtwo.png', 'typePsychic.png');
const articuno = new Pokemon('Articuno', 50, 'articuno.gif', 'articunoBack.gif', '9iconArticuno.png', 'typeIce.png');
const zapdos = new Pokemon('Zapdos', 50, 'zapdosFront.gif', 'zapdosBack.gif', '10iconZapdos.png', 'typeElectric.png');
const moltres = new Pokemon('Moltres', 50, 'moltresFront.gif', 'moltresBack.gif', '11iconMoltres.png', 'typeFire.png');
const lugia = new Pokemon('Lugia', 50, 'lugia.gif', 'lugiaBack.gif', '12iconLugia.png', 'typePsychic.png');

//list of battlefields
const backyard = new Battlefield('backyard.png', 'Backyard');
const volcano = new Battlefield('volcano.png', 'Volcano');
const forest = new Battlefield('gym.png', 'Forest');
const ice = new Battlefield('ice.png', 'Ice');
const sky = new Battlefield('sky.png', 'Sky');

//we need to store each object inside a container
//we can use an Array() constructor
const areas = Array();
let x = areas[0] = backyard;
let y = areas[1] = volcano;
let z = areas[2] = forest;
let n = areas[3] = ice;
let m = areas[4] = sky;

const characters = Array();
let a = characters[0] = venusaur;
let b = characters[1] = charizard;
let c = characters[2] = blastoise;
let d = characters[3] = pikachu;
let e = characters[4] = snorlax;
let f = characters[5] = gengar;
let g = characters[6] = dragonite;
let h = characters[7] = mewtwo;
let i = characters[8] = articuno;
let j = characters[9] = zapdos;
let k = characters[10] = moltres;
let l = characters[11] = lugia;



console.log(areas);
console.log(characters);
console.log(b);

//[Create] a new function that will display the interaction between the 2 characters

//Review:
//3 Functions: separation on concerns
//1. Contestants = will be used to get the information about the players
//2. Battle = interaction between player 1 and player 2
//3. Play = this triggers the entire game play
//HOME
let footer = document.querySelector('footer');
footer.style.color = 'black';
let home = document.querySelector('body');
home.style.background = 'url(./images/logo.png)';
home.style.backgroundSize = 'cover';
home.style.backgroundRepeat = 'no-repeat';
let start = document.getElementById('title');
start.style.paddingTop = "550px";
start.style.textAlign = "center";
start.innerHTML = `
		<button class="btn btn-outline-primary" onclick="play()" id="startButton">-Press the button to start-</button>
		`

function contestants(pokemon1, pokemon2, backg) { //get the info about the players that will be competing
	let contestant1 = document.getElementById('healthIndicator1');
	let contestant2 = document.getElementById('healthIndicator2');
	let arena = document.getElementById('field');
	let bgName = backg.name.toLowerCase();
	arena.setAttribute("id", bgName);
	arena.setAttribute("class", "container");
	//we will receive an object from the user.
	//how do we access a property of an object?
	//we want to get the following information about the pokemon
	//name, level, image
	let name1 = pokemon1.name;
	let hp1 = pokemon1.health;
	let hp2 = pokemon2.health;
	let char1Level = pokemon1.level;
	let char2Level = pokemon2.level;
	let name2 = pokemon2.name;
	contestant1.innerHTML = `
			<div class="mt-2">
				<div class="row align-items-center">
					<div class="col pr-0">
						<h6 class="row"> ${hp1 + '/' + hp1} </h6>
						<h4 class="row">${name1}</h4>
						<h5 class="row">Level: ${char1Level}</h5>
					</div>
					<div class="col pl-0">
						<button class="btn btn-outline-warning" onclick="attack1()">Attack!</button>
					</div>
				</div>

				<img class="img-fluid" style="height: 380px" src="${pokemon1.imageBack}" id="image1">
			</div>
		`
	//player 2
	contestant2.innerHTML = `
			<div class="mt-2">

				<div class="row align-items-center">
					<div class="col pr-0">
						<h6 class="row"> ${hp2 + '/' + hp2} </h6>
						<h4 class="row">${name2}</h4>
						<h5 class="row">Level: ${char2Level}</h5>
					</div>
					<div class="col pl-0">
						<button class="btn btn-outline-warning" onclick="attack2()">Attack!</button>
					</div>
				</div>

				<img class="img-fluid" style="height: 170px" src="${pokemon2.imageFront}" id="image2">
			</div>
		`

}

let healthPoints1 = 100;
function attack1() {
	healthPoints1 -= 25;
	let hp2 = document.getElementById('health2');

	if (healthPoints1 == 75) {
		let image1 = document.getElementById('image1');
		image1.setAttribute("class", "animate__animated animate__wobble img-fluid");
		hp2.setAttribute("class", `progress-bar bg-success w-${healthPoints1}`);
	}
	if (healthPoints1 == 50) {
		let image1 = document.getElementById('image1');
		image1.setAttribute("class", "animate__animated animate__swing img-fluid");
		hp2.setAttribute("class", `progress-bar bg-warning w-${healthPoints1}`);
	}
	if (healthPoints1 == 25) {
		let image1 = document.getElementById('image1');
		image1.setAttribute("class", "animate__animated animate__wobble img-fluid");
		hp2.setAttribute("class", `progress-bar bg-danger w-${healthPoints1}`);
	}
	if (healthPoints1 == 0) {
		let image1 = document.getElementById('image1');
		image1.setAttribute("class", "animate__animated animate__swing img-fluid");
		hp2.setAttribute("class", `progress-bar w-${healthPoints1}`);
		let win = document.querySelector('body');
		win.innerHTML = `
			<div class="text-center mt-5">
				<div>
					<img src="./images/victory.gif" />
				</div>
				<div class="text-center">
					<img src="${player1.imageFront}" height="300"/>
					<h2>${player1.name}</h2>
					<button class="btn btn-outline-light mt-3"><a href="index.html" style="text-decoration: none; font-size: 20px">Play Again</a></button>
				</div>
			</div>
			<audio controls autoplay hidden="" src="./sound/pokemonvictory.mp3" type ="audio/mp3"">
			</audio>
			`
	}
}

let healthPoints2 = 100;
function attack2() {
	healthPoints2 -= 25;
	let hp2 = document.getElementById('health1');
	if (healthPoints2 == 75) {
		let image2 = document.getElementById('image2');
		image2.setAttribute("class", "animate__animated animate__wobble img-fluid");
		hp2.setAttribute("class", `progress-bar bg-success w-${healthPoints2}`);
	}
	if (healthPoints2 == 50) {
		let image2 = document.getElementById('image2');
		image2.setAttribute("class", "animate__animated animate__swing img-fluid");
		hp2.setAttribute("class", `progress-bar bg-warning w-${healthPoints2}`);
	}
	if (healthPoints2 == 25) {
		let image2 = document.getElementById('image2');
		image2.setAttribute("class", "animate__animated animate__wobble img-fluid");
		hp2.setAttribute("class", `progress-bar bg-danger w-${healthPoints2}`);
	}
	if (healthPoints2 == 0) {
		let image2 = document.getElementById('image2');
		image2.setAttribute("class", "animate__animated animate__swing img-fluid");
		hp2.setAttribute("class", `progress-bar w-${healthPoints2}`);
		let lose = document.querySelector('body')
		lose.innerHTML = `
			<div class="text-center mt-5">
				<div>
					<img src="./images/gameover.gif" />
				</div>
				<div class="text-center">
					<button class="btn btn-outline-light mt-3"><a href="index.html" style="text-decoration: none; font-size: 20px">Play Again</a></button>
				</div>
			</div>
			<audio controls autoplay hidden="" src="./sound/gameover.wav" type ="audio/mp3"">
			</audio>
			`
	}
}

function battle(contestant1, contestant2, backg) {
	let game = document.getElementById('game');
	let player1 = document.getElementById('healthIndicator1')
	let player2 = document.getElementById('healthIndicator2')
	//[innerHTML] -> refers to the property of the acquired section in the HTML document. 
	game.innerHTML = `
			<div class="container">
				<div class="container mt-5 mb-2">
					<h1 class="text-center" style="font-family: 'Pokemon Solid', sans-serif;">Battle!</h1>
					<div class="text-center">
						<img id="battle"/>
					</div>
				</div>
				<div class="row ml-5">
					<!-- healthbar p1 -->
					<div class="col">
						<h5>HP: </h5>
						<div class="progress" style="width: 60%">
							<div class="progress-bar bg-success w-100" id="health1"></div>
						</div>
					</div>
					<!-- healthbar p2 -->
					<div class="col">
						<h5>HP: </h5>
						<div class="progress" style="width: 60%">
							<div class="progress-bar bg-success w-100" id="health2"></div>
						</div>
					</div>
				</div>
			</div>
				<audio controls autoplay hidden="" src="./sound/pokemonSound.mp3" type ="audio/mp3"">
				</audio>
			`;
	contestants(contestant1, contestant2, backg);
}

function play(player1, player2, backg) {

	let game = document.getElementById('game');

	if (!player1) {
		//FOR PLAYER 1
		//to remove homepage styles
		let white = document.querySelector('footer');
		white.style.removeProperty('color');
		let rm = document.querySelector('body');
		rm.style.removeProperty("background");
		let rmstyle = document.getElementById('title');
		rmstyle.style.removeProperty("padding-top");
		rmstyle.style.removeProperty("text-align");

		let game = document.getElementById('title');
		let chars = document.getElementById('characters');
		let pokemon = characters.map(function (element) {
			for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount += 1) {
				return game.innerHTML = `
		 			<div style="margin: 5px 100px; text-align: center">
			 			<img src="${element.imageSelect}" height="50"> 
			 			<img src="${element.type}" height="30px">	
			 			<h4 class="mb-0">${element.name}</h4> 
			 			<button class="btn btn-outline-light" style="font-size: 10px" onclick="pokemon${+characters.indexOf(element)}()">I choose you!</button>
			 		</div>
		 		`
			}
		})
		pokemon = pokemon.join(" ");

		game.innerHTML = `
			<h2 class="mt-4 mb-5 text-center" style="font-family: 'Pokemon Solid', sans-serif;">Select Player 1!</h2>
		`;
		chars.innerHTML = `
		<div class="d-flex flex-row align-items-center">
				<div style="margin: auto">
					<img src="./images/player.png" height="100">
				</div>
				<div class="container d-flex inline-block justify-content-around flex-wrap">
					${pokemon}
				</div>
				<div style="margin: auto">
					<img src="./images/player.png" height="100">
				</div>
		</div>
		`;

	}
	if (player1 && !player2) {
		//FOR PLAYER 2
		let game = document.getElementById('title');
		let chars = document.getElementById('characters');
		let pokemon2 = characters.map(function (element) {
			for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount += 1) {
				return game.innerHTML = `
		 			<div style="margin: 5px 100px; text-align: center">
			 			<img src="${element.imageSelect}" height="50">
			 			<img src="${element.type}" height="30px">
			 			<h4 class="mb-0">${element.name}</h4>
			 			<button class="btn btn-outline-light" style="font-size: 10px" onclick="pokemon2${+characters.indexOf(element)}(player1)">I choose you!</button>
			 		</div>
		 		`
			}
		})
		pokemon2 = pokemon2.join(" ");

		game.innerHTML = `
		<h2 class="mt-4 mb-5 text-center" style="font-family: 'Pokemon Solid', sans-serif;">Select Opponent!</h2>
		`;
		chars.innerHTML = `
		<div class="d-flex flex-row align-items-center">
				<div style="margin: auto">
					<img src="${player1.imageFront}" height="100">
				</div>
				<div class="container d-flex inline-block justify-content-around flex-wrap">
					${pokemon2}
				</div>
				<div style="margin: auto">
					<img src="./images/player.png" height="100">
				</div>
		</div>
		`;
	}
	if (player1 && player2 && !backg) {
		let game = document.getElementById('title');
		let chars = document.getElementById('characters');
		let pokemon2 = characters.map(function (element) {
			for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount += 1) {
				return game.innerHTML = `
		 			<div style="margin: 5px 100px; text-align: center">
			 			<img src="${element.imageSelect}" height="50">
			 			<img src="${element.type}" height="30px">
			 			<h4 class="mb-0">${element.name}</h4>
			 		</div>
		 		`
			}
		})
		pokemon2 = pokemon2.join(" ");

		game.innerHTML = `
			<h2 class="mt-4 mb-5 text-center" style="font-family: 'Pokemon Solid', sans-serif;">Continue to Battle</h2>
		`;
		chars.innerHTML = `
		<div class="d-flex flex-row align-items-center">
				<div style="margin: auto">
					<img src="${player1.imageFront}" height="100">
				</div>
				<div class="container d-flex inline-block justify-content-around flex-wrap">
					${pokemon2}
				</div>
				<div style="margin: auto">
					<img src="${player2.imageFront}" height="100">
				</div>
		</div>
		`;

		let confirm = document.getElementById('confirm');
		confirm.innerHTML = `
		<div class="text-center" style="margin-top:2rem">
			<button class="btn btn-outline-light w-5" onclick="versus()">Continue to Battle</button>
		</div>
		`
	}
	if (player1 && player2 && backg) {
		battle(player1, player2, backg);
	}
};

function versus() {
	let game = document.getElementById('title');
	let chars = document.getElementById('characters');
	let confirm = document.getElementById('confirm');

	game.innerHTML = `
	<div class="row align-items-center text-center" style="margin-top: 11%">
		<div class="col-4">
			<img src="${player1.imageFront}" height="300">
		</div>
		<div class="col-4">
			<h2 class="mt-4 mb-5 text-center" style="font-family: 'Pokemon Solid', sans-serif; font-size: 3rem">VS</h2>
		</div>
		<div class="col-4">
			<img src="${player2.imageFront}" height="300">
		</div>
	</div>
	`;
	chars.innerHTML = `
	<div class="d-flex flex-row justify-content-around">
		<div>
			<button class="btn btn-outline-light mt-3" style="margin-top: 3rem" onclick="backgroundSelect()">Continue</button>
		</div>
		<div>
			<button class="btn btn-outline-light mt-3 pl-4 pr-4" style="margin-top: 3rem" onclick="play()">Cancel</button>
		</div>
	</div>
	`
	confirm.innerHTML = ""
}

function backgroundSelect(playingfield) {
	console.log(playingfield)
	let background = document.getElementById('game')
	let battlefield = areas.map(function (arena) {
		for (let bg = 0; bg < areas.length; bg += 1) {
			return background.innerHTML = `
			<div class="col">
				<img height="75" src="${arena.background}"/>
				<h6>${arena.name}</h6>
			</div>
			`
		}
	})
	battlefield = battlefield.join(" ");
	if (!playingfield) {
		background.innerHTML = `
			<div class="container text-center" style="margin-top: 15rem">	
				<h2 style="font-family: 'Pokemon Solid', sans-serif;">Select Battle Field</h2>
				<div class="row mt-4">
					${battlefield}
				</div>
				<button class="mt-4 btn btn-outline-light" onclick="bgImages()">Select Arena</button>
			</div>
			`
	} else {
		play(player1, player2, playingfield);
	}
}


//FOR PLAYER 1
function pokemon0() {
	player1 = venusaur;
	play(player1);
}

function pokemon1() {
	player1 = charizard;
	play(player1);
}

function pokemon2() {
	player1 = blastoise;
	play(player1);
}

function pokemon3() {
	player1 = pikachu;
	play(player1);
}

function pokemon4() {
	player1 = snorlax;
	play(player1);
}

function pokemon5() {
	player1 = gengar;
	play(player1);
}

function pokemon6() {
	player1 = dragonite;
	play(player1);
}

function pokemon7() {
	player1 = mewtwo;
	play(player1);
}

function pokemon8() {
	player1 = articuno;
	play(player1);
}

function pokemon9() {
	player1 = zapdos;
	play(player1);
}

function pokemon10() {
	player1 = moltres;
	play(player1);
}

function pokemon11() {
	player1 = lugia;
	play(player1);
}

//FOR PLAYER 2
function pokemon20(pokemonSelected) {
	player2 = venusaur;
	play(pokemonSelected, player2);
}

function pokemon21(pokemonSelected) {
	player2 = charizard;
	play(pokemonSelected, player2);
}

function pokemon22(pokemonSelected) {
	player2 = blastoise;
	play(pokemonSelected, player2);
}

function pokemon23(pokemonSelected) {
	player2 = pikachu;
	play(pokemonSelected, player2);
}

function pokemon24(pokemonSelected) {
	player2 = snorlax;
	play(pokemonSelected, player2);
}

function pokemon25(pokemonSelected) {
	player2 = gengar;
	play(pokemonSelected, player2);
}

function pokemon26(pokemonSelected) {
	player2 = dragonite;
	play(pokemonSelected, player2);
}

function pokemon27(pokemonSelected) {
	player2 = mewtwo;
	play(pokemonSelected, player2);
}

function pokemon28(pokemonSelected) {
	player2 = articuno;
	play(pokemonSelected, player2);
}

function pokemon29(pokemonSelected) {
	player2 = zapdos;
	play(pokemonSelected, player2);
}

function pokemon210(pokemonSelected) {
	player2 = moltres;
	play(pokemonSelected, player2);
}

function pokemon211(pokemonSelected) {
	player2 = lugia;
	play(pokemonSelected, player2);
}

function bgImages() {
	let bground = prompt("Select Battle Field");
	bground = bground.toLowerCase();
	if (bground === 'volcano' || bground === 'backyard' || bground === 'forest' || bground === 'ice' || bground === 'sky') {
		bground = eval(bground);
		backgroundSelect(bground);
	} else {
		let background = document.getElementById('game')
		let battlefield = areas.map(function (arena) {
			for (let bg = 0; bg < areas.length; bg += 1) {
				return background.innerHTML = `
				<div class="col">
					<img height="75" src="${arena.background}"/>
					<h6>${arena.name}</h6>
				</div>
				`
			}
		})
		battlefield = battlefield.join(" ");
		background.innerHTML = `
			<div class="container text-center" style="margin-top: 15rem">
				<h2 style="font-family: 'Pokemon Solid', sans-serif;">Invalid Input, choose from the following:</h2>
				<div class="row mt-4">
					${battlefield}
				</div>
				<button class="mt-4 btn btn-outline-light" onclick="bgImages()">Select Arena</button>
			</div>
			`
	}
}