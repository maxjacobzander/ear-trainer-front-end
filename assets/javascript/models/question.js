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

    // mixedUpQuestions

    renderGame(){
        const gameHolder = document.getElementById("quiz-box")
        let actualGame = document.createElement("div")
        // actualGame.classList.add("test-box")
        actualGame.dataset.id = this.id
        actualGame.innerHTML += this.showHTML()
        gameHolder.appendChild(actualGame)
        // gameHolder.addEventListener("click", e => {
        //     if(e.target.className === "sound-button") this.playInterval(e)
        // })
        document.querySelector(".sound-button").addEventListener("click", API.playInterval)

    }

    showHTML(){
        return `
        <div class="button-container">
        <audio id="interval">
            <source src="${this.interval}" type="audio/mpeg">
        </audio>
        <button class="sound-button">Play Interval</button></div>
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

    intervalAudio(){
        let id = parseInt(dataset.id)
        fetch(`http://localhost:3000/questions/${id}`)
            .then(resp => resp.json())
            .then(questions => {
                questions.forEach(question => {
                    const {id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id} = question
                    new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id)
                })
            }
            )
    }

    selectAnswer(){
        
        document.querySelector
    }


    



    // currentInterval = {};
    // score = 0;
    // questionCounter = 0;
    // remainingInterval = [];
}