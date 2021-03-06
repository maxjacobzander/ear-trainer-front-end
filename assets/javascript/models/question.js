class Question {
    constructor(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game){
        this.id = id
        this.interval = interval
        this.answer_1 = answer_1
        this.answer_2 = answer_2
        this.answer_3 = answer_3
        this.answer_4 = answer_4
        this.correct_answer = correct_answer
        this.game = game
    }

    renderQuestion(){
        const gameHolder = document.getElementById("quiz-box")
        let actualGame = document.createElement("div")
        const correctAnswer = this.correct_answer
        actualGame.dataset.id = this.id
        actualGame.innerHTML = this.showHTML()
        gameHolder.appendChild(actualGame)
        document.querySelector(".sound-button").addEventListener("click", API.playInterval)
        for (let index = 0; index < 4; index++) {
            const answer = document.querySelectorAll(".answer")[index];
            answer.addEventListener("click", this.handleAnswer.bind(this))
        }
        document.getElementById('next').onclick = () => {
            const id = actualGame.dataset.id || undefined;
            actualGame.innerHTML = ''
            this.game.nextQuestion()
        }
    }
    handleAnswer(){
            if (event.target.innerText === this.correct_answer) {
                this.game.score += 1
                document.getElementById("score").innerHTML = this.game.score
            }
            else { 
                event.target.style.color = "red";
            }
    }


    showHTML(){
        return `
        <div class="button-container">
        <audio id="interval">
            <source src=".${this.interval}" type="audio/mpeg">
        </audio>
        <button class="sound-button">Play Interval</button></div>
    <br>
    <div class="answers">
        <button class="button answer">${this.answer_1}</button>
        <button class="button answer">${this.answer_2}</button>
        <button class="button answer">${this.answer_3}</button>
        <button class="button answer">${this.answer_4}</button>
        <br><br>
    </div>
    <div class="button-container">
        <button id="next" class="next-button-hide" onClick={this.nextQuestion}>Next</button>
    </div>
    <br><br>
        `
    }
}