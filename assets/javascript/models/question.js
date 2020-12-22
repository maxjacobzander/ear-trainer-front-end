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
        const correctAnswer = this.correct_answer
        actualGame.dataset.id = this.id
        actualGame.innerHTML = this.showHTML()
        gameHolder.appendChild(actualGame)
        document.querySelector(".sound-button").addEventListener("click", API.playInterval)
        // document.getElementsByClassName(".answer").addEventListener("click", this.answerCorrect)
        document.getElementById('next').onclick = () => {
            const id = actualGame.dataset.id || undefined;
            actualGame.innerHTML = ''
            API.gatherQuestions()
        }
    }

    answerCorrect(){
        let currentScore = Game.score
        toArray(document.querySelectorAll(".answer")).forEach(answer => {
        // let answer = answer.innerText
    //         if (answer === this.id.correct_answer) {
    //             return currentScore + 1
    //         };
        })
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
        <button class="button" class="answer">${this.answer_1}</button>
        <button class="button" class="answer">${this.answer_2}</button>
        <button class="button" class="answer">${this.answer_3}</button>
        <button class="button" class="answer">${this.answer_4}</button>
        <br><br>
    </div>
    <div class="button-container">
        <button id="next" class="next-button-hide" onClick={this.nextQuestion}>Next</button>
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


    static userAnswer(target){
        const correctAnswer = this.correct_answer
        let answer1 = document.getElementById('interval1')
        let answer2 = (document.getElementById('interval2').innerText)
        let answer3 = (document.getElementById('interval3').innerText)
        let answer4 = (document.getElementById('interval4').innerText)
        switch(target){
            case answer1 === correctAnswer:
                console.log("score = (score + 1)");
                break;
            case answer2 === this.correct_answer:
                score = (score + 1);
                break;
            case answer3 === this.correct_answer:
                score = (score + 1);
                break;
            case answer4 === this.correct_answer:
                score = (score + 1);
                break;
        }
    }
}