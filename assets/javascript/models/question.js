class Question {
    constructor(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id){
        this.id = id
        this.interval = interval
        this.answer_1 = answer_1
        this.answer_2 = answer_2
        this.answer_3 = answer_3
        this.answer_4 = answer_4
        this.correct_answer = correct_answer
        this.game_id = game_id
        this.renderGame()
    }


    renderGame(){
        const gameHolder = document.getElementById("quiz-box")
        let actualGame = document.createElement("div")
        debugger
        actualGame.innerHTML += this.showHTML()
        gameHolder.appendChild(actualGame)

    }

    showHTML(){
        return `
        <div class="button-container">
        <audio id="interval">
            <source src="assets/audio/Maj6.mp3" type="audio/mpeg">
        </audio>
        <button id="sound" class="sound-button">Play Interval</button></div>
    <br>
    <div class="answers">
        <button class="button" id="interval1">${this.answer_1}</button>
        <button class="button" id="interval2">${this.answer_2}</button>
        <button class="button" id="interval3">${this.answer_3}</button>
        <button class="button" id="interval4">${this.answer_4}</button>
        <br><br>
    </div>
    <div class="button-container">
        <button id="next" class="next-button-hide">Next</button>
    </div>
        `
    }
    
    gatherQuestions(){
        debugger
        fetch("http://localhost:3000/questions")
            .then(resp => resp.json())
            .then(questions => {
                questions.foreach(question => {
                    const {id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id} = question
                    new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id)
                })
            }
            )

        
    }

    currentInterval = {};
    score = 0;
    questionCounter = 0;
    remainingInterval = [];

    play(){
   
    }

    nextButton = document.getElementById('next');

    // function nextInterval() {
    //     console.log("Now we play the next interval and repopulate the answer options")
    // }
    
    // nextButton.addEventListener('click', nextInterval)
    

}

