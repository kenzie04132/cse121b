//Kenzie Ash
//Space Wordle

//Creates wordlist, sets up game, all basic functions
let wordlist = ["ACRUX", "ARIEL", "CERES", "ORBIT", "VENUS", "EARTH", "COMET", "DRACO", "ORION", "PLUTO", "VESTA", "SPACE", "ALCOR", "ALTAR", "ARNEB", "DIONE", "ORBIT", "ROBOT", "LUNAR", "RINGS", "MOONS", "PROBE", "DELTA", "COSMO", "SOLAR"];
let currentRow = 0;
let nextRowBlock = 0;
let score = 0;
let remNotification = 0;
let gameFin = 0;
let keyPress;
let restart;
let restart2;
let enterClick;
let deleteClick;
let objArray = []
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//creates a container to hold game contents
let container = document.createElement("div");
container.id = "container";
document.body.append(container);

//begins game
gameStart();

//Restarts game in case of a natural game over or the clicking of the give up button
function gameOver(){
	gameFin = 1;
	document.removeEventListener("keyup", deleteClick, false);
	document.removeEventListener("keyup", enterClick, false);
	document.removeEventListener("keyup", keyPress, false);
	document.removeEventListener("keyup", restart, false);
	document.addEventListener("keyup", restart = function(event) {
		if (event.key === "Enter") {
			document.removeEventListener("keyup", restart, false);
			gameStart();
		}
	});
}

//Starts the game, creates a list of numbers equal to the word list, randomly selects a word based on numbers created
function gameStart(){
	container.innerHTML = " ";
	gameFin = 0;
	currentRow = 0;
	nextRowBlock = 0;
	score = 0;
	remNotification = 0;
	let rand = Math.floor(Math.random() * wordlist.length);
	chosenWord = wordlist[rand];

    //Creates and shows the Wordled game logo, pulling from the CSS Styles sheet
	let logo = document.createElement("div");
	logo.className = "logo";

	let domName = "WORDLED";
	for(i = 0; i < domName.length; i++){
		let spanClass = (i == 0 || i % 2 == 0)? "logo_neonblue" : "logo_spaceblue";
		let logoSpan = document.createElement("span");
		logoSpan.className = spanClass;
		logoSpan.innerText = domName[i];
		logo.append(logoSpan);
	}

	container.append(logo);

    //Creates the navigation bar, containing the Give Up button and produces the randomly selected word if clicked
	let navBar = document.createElement("div");
	navBar.className = "nav_bar";
		let giveUpBtn = document.createElement("button");
		giveUpBtn.id = "giveUpBtn";
		giveUpBtn.innerText = "Give Up";
		giveUpBtn.addEventListener("click", function quitClick(event) {
			if(gameFin == 0){
				notification.innerText = "The word was " + chosenWord + ". Press Enter to play again";
				gameOver();
			}
		});
	navBar.append(giveUpBtn);
	container.append(navBar);

    //Creates the game box, such as the rows for the letters and the keyboard
	let gameArea = document.createElement("div");
	gameArea.className = "game_area";
	for(i = 0; i < 6; i++){
		let row = document.createElement("div");
		row.className = "row";
		for(j = 0; j < 5; j++){
			let rowBlock = document.createElement("div");
			rowBlock.className = "row_block";
			row.append(rowBlock);
		}
		gameArea.append(row);
	}
	container.append(gameArea);

	let notification = document.createElement("div");
	notification.id = "notification";
	notification.innerText = "Start guessing!"
	container.append(notification);

	let keyLayoutTop = "QWERTYUIOP";
	let keyLayoutMid = "ASDFGHJKL";
	let keyLayoutBot = "ZXCVBNM";

    //Keyboard: Letters, Backspace key, Enter Key
	let keyboard = document.createElement("div");
	keyboard.id = "keyboard";

		let topKeys = document.createElement("div");
		topKeys.id = "topKeys";
		addKeys(topKeys, keyLayoutTop, "keyboardKey_s");
		keyboard.append(topKeys);

		let midKeys = document.createElement("div");
		midKeys.id = "midKeys";
		addKeys(midKeys, keyLayoutMid, 'keyboardKey_m');
		keyboard.append(midKeys);

		let botKeys = document.createElement("div");
		botKeys.id = "botKeys";
		let deleteKey = document.createElement("span");
		deleteKey.className = "keyboardKey_l";
		deleteKey.innerHTML = "&#x2190;";
		deleteKey.addEventListener("click", function deleteClick(event) {
			if(gameFin == 0){
				let wordRow = document.getElementsByClassName("row")[currentRow];
				let rowBlockEl = wordRow.childNodes;
				deleteLetter(rowBlockEl);
			}
		});
		botKeys.append(deleteKey);
		addKeys(botKeys, keyLayoutBot, "keyboardKey_s");
		let enterKey = document.createElement("span");
		enterKey.className = "keyboardKey_l";
		enterKey.innerText = "Enter";
		enterKey.addEventListener("click", enterClick = function(event) {
			if(gameFin == 0){
				let wordRow = document.getElementsByClassName("row")[currentRow];
				let rowBlockEl = wordRow.childNodes;
				submitWord(wordRow);
			}
		});
		botKeys.append(enterKey);
		keyboard.append(botKeys);

	container.append(keyboard);

	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	document.addEventListener("keyup", keyPress = function(event) {
		if(gameFin == 0){
			let wordRow = document.getElementsByClassName("row")[currentRow];
			let rowBlockEl = wordRow.childNodes;
			for(i = 0; i < alphabet.length; i++){
				if ((event.key === alphabet[i] || event.key === alphabet[i].toUpperCase())) {
					addLetter(rowBlockEl, alphabet[i]);
				}
			}
			if (event.key === "Enter") {
				submitWord(wordRow, keyPress);
			}
			if (event.key === "Backspace") {
				deleteLetter(rowBlockEl);
			}
		}
	});
}

//Function of the backspace key
function deleteLetter(rowBlockEl){
	if(nextRowBlock > 0){
		nextRowBlock--;
		rowBlockEl[nextRowBlock].innerText = " ";
	}
}

function count(str, find) {
    return (str.split(find)).length - 1;
}

//Handles letter input, assigning colors if the letter is correct or not on the keyboard
function submitWord(wordRow, keyPress){
	if(nextRowBlock > 0 && nextRowBlock % 5 == 0){
		let word = wordRow.innerText.replace(/[\n\r]/g, " ");
		if(wordlist.includes(word)){
			let answer = [];
			for(i = 0; i < word.length; i++){
				let letter = word[i].toUpperCase();
				answer.push(letter);
				let blockClass = "blockGrey";
				if(chosenWord.toUpperCase().includes(letter)){
					if(chosenWord[i].toUpperCase() === letter){
						score++;
						blockClass = " blockBlue";
						if(count(word, letter) > count(chosenWord, letter)){
							for(j = 0; j < wordRow.childNodes.length; j++){
								if(wordRow.childNodes[j].innerText == letter && wordRow.childNodes[j].className == "row_block  blockGold"){
									wordRow.childNodes[j].className = "row_block  blockGrey";
									let index = answer.indexOf(letter);
									if (index !== -1) {
										answer.splice(index, 1);
									}
								}
							}
						}
					}else{
						if(countOccurrences(answer, letter) <= count(chosenWord, letter)){
							blockClass = " blockGold";
						}
						else{
							blockClass = " blockGrey";
						}
					}
				}
				wordRow.childNodes[i].className = "row_block " + blockClass;
				let keyboard = document.getElementById("keyboard_" + letter);
				if(chosenWord.toUpperCase().includes(letter)){
					keyboard.className += " blockBlue";
				}
				else{
					keyboard.className += " blockGrey";
				}
			}

            //Displays helpful text on whether you win or lose the game, as well as if the user makes an inncorect input
			if(score === 5){
				notification.innerText = "Well done, you won! Enter to play again";
				gameOver();
			}
			else if(currentRow == 5){
				notification.innerText = "You lost. The word was " + chosenWord + ". Press Enter to play again";
				gameOver();
			}
			else{
				score = 0;
				nextRowBlock = 0;
				currentRow++;
			}
		}else{
			remNotification = 0;
			notification.innerText = "Word not in list";
		}
	}else{
		remNotification = 0;
		notification.innerText = "You must enter 5 characters";
	}
}

//Creates the visual representation of the keyboard for the player to interact with
function addKeys(el, layout, keyClass){
	for(i = 0; i < layout.length; i++){
		let j = i;
		let key = document.createElement("span");
		key.className = keyClass;
		key.id = "keyboard_" + layout[i];
		key.innerText = layout[i];
		key.addEventListener("click", function keyboardPress(event) {
			if(gameFin == 0){
				let wordRow = document.getElementsByClassName("row")[currentRow];
				let rowBlockEl = wordRow.childNodes;
				addLetter(rowBlockEl, layout[j]);
			}
		});
		el.append(key);
	}
}

//Handles the process of adding guessed letters to the visual representation of the word being guessed
function addLetter(rowBlockEl, letter){
	if(remNotification == 0){
		remNotification = 1;
		notification.innerText = " ";
	}
	if(nextRowBlock < 5){
		rowBlockEl[nextRowBlock].innerText = letter.toUpperCase();
		nextRowBlock++;
	}
}

//I decided to add a wordbank as I realized this Space Themed Wordle might be difficult without it
const revealButton = document.getElementById("reveal-button");
const hiddenWordbank = document.getElementById("hidden-wordbank");

revealButton.addEventListener("click", () => {
    if (hiddenWordbank.style.display === "none") {
        hiddenWordbank.style.display = "block";
            revealButton.textContent = "ACRUX, ARIEL, CERES, ORBIT, VENUS, EARTH, COMET, DRACO, ORION, PLUTO, VESTA, SPACE, ALCOR, ALTAR, ARNEB, DIONE, ORBIT, ROBOT, LUNAR, RINGS, MOONS, PROBE, DELTA, COSMO, SOLAR. CLick again to hide.";
    } else {
        hiddenWordbank.style.display = "none";
        revealButton.textContent = "Click to Reveal";
    }
});
