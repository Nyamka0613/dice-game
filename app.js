//Тоглоотын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
// Тоглоом дууссан эссэхийг хадгалах төлөвийн хувьсагч.
var isNewGame;

//Аль тоглогч шоо шиддэх вэ гэдгийн энд хадгална.
var activePlayer;

// Хоер тоглогчийн цуглуулсан оноонууд 
var scores;

// Идвэхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо.
var roundScore;

//Шооны зурагийг үзүүлэх
var diceDom = document.querySelector(".dice");

//Тогломийг эхлгүүлнэ.
initGame();

//Тогломыг шинээр эхэлхэд бэлтгэнэ.
function initGame() {
    //Тоглоом эхэллээ гэдэг төлөвт оруулалаа>
    isNewGame = true;
    //Toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogch 0, 2dugaar toglogch 2 nomertei
    activePlayer = 0;

    //Toglogchdiin tsugluulsan onoog hadgalah huwsagch

    scores = [0, 0];

    //Toglogchiin eeljindee tsugluulsan onoog hadgalah huwsagch

    roundScore = 0;


    //Programm ehlehed beltgey
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    //Тоглогчдын нэрийг буцааж гаргах.
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";

}

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    if(isNewGame) {
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
    }   else {
            alert("Game Over CLICK IN NEW GAME BUTTON")
        }
    
});

// HOLD товчины эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (isNewGame) {
        // Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноон дээр нэмж өгнө.
        scores[activePlayer] = scores[activePlayer] + roundScore;
        
        // Дэлгэц дээр оноог нь өөрчилнө.
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Уг тоглоч хожсон эсэхийг ( оноо нь 100-с их байх) шалгах
        if(scores[activePlayer] >= 100) {
        // Тоглоотийг дууссан төлөвт оруулана.
        isNewGame = false;

        // Ялагч гэсэн текстийг нэрнийхэн оронд гаргана.
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Тоглогчийн ээлжийг солино.
            switchToNextPlayer();
    }
    }else {
        alert("Game Over CLICK IN NEW GAME BUTTON")
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
document.querySelector(".btn-new").addEventListener("click", initGame);
