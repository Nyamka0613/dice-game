//Toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogch 0, 2dugaar toglogch 2 nomertei

var activePlayer = 0;

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

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1 -6 доторх санамсаргүй нэг тоо гаргаж ирнэ
    var diceNumber = Math.floor( Math.random() * 6 ) + 1;
    // Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png"
    // Буусан тоон нэгээс ялгаатай бол идвэхтэй Тоглогчийн ээлжийн оноог өөрчилнө.
    if(diceNumber !== 1){
        // 1 -с ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer ).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлчийг энд сольж өгнө.
        switchToNextPlayer();
    }
});

// HOLD товчины эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function() {

    // Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноон дээр нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    
    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    // Уг тоглоч хожсон эсэхийг ( оноо нь 100-с их байх) шалгах
    if(scores[activePlayer] >= 10) {
        // Ялагч гэсэн текстийг нэрнийхэн оронд гаргана.
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
    }
});

//Энэ функц нь тоглох ээлжийг дараачиийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer(){
      //Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      roundScore = 0;
      document.getElementById("current-" + activePlayer ).textContent = 0;

      // Тоглогчийн ээлжийг нөгөө тоглогчид шилжүүлнэ.

      // Хэрэв идвэхтэй тоглогч нь 0 байвал идвэхтэй тоглогчийг 1 болго.
      // Үгүй бол идвэхтэй тоглогч нь 0 болго.
      // if( activePlayer === 0){
      //     activePlayer = 1;
      // } else {
      //     activePlayer= 0;
      // }
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      
      // Улаан цэгийг шилжүүлэх кодыг хийнэ. 
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");

      // Шоог түр алга болгоно.
      diceDom.style.display = "none";
}

//Шинэ тоглоом эхлүүлэх товчиний эвэнт листенер.
document.querySelector(".btn-new").addEventListener("click", function(){
    alert("click")
});