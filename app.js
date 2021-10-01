//Toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogch 0, 2dugaar toglogch 2 nomertei

var activePlayer = 1;

//Toglogchdiin tsugluulsan onoog hadgalah huwsagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulsan onoog hadgalah huwsagch

var roundScore = 0;

//shoonii ali talaar buusnigg hadgalah huwsagch hergetei 1 -6 gsn utagiig ene huwsagch sanammsargui uusgej ogno 

var dice = Math.floor( Math.random() * 6 ) + 1;

// <div class="player-score" id="score-0">43</div>

// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>YES<EM>";

//Programm ehlehed beltgey

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log( " Шоо " + dice );
