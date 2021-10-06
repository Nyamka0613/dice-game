//Toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogch 0, 2dugaar toglogch 2 nomertei

var activePlayer = 1;

//Toglogchdiin tsugluulsan onoog hadgalah huwsagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulsan onoog hadgalah huwsagch

var roundScore = 0;

//shoonii ali talaar buusnigg hadgalah huwsagch hergetei 1 -6 gsn utagiig ene huwsagch sanammsargui uusgej ogno 

var diceNumber = Math.floor( Math.random() * 6 ) + 1;

//Programm ehlehed beltgey
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor( Math.random() * 6 ) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png"
});
