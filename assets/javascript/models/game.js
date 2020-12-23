class Game {
    constructor(id, score, questions){
        this.id = id
        this.score = score
        this.questions = questions.map( question => {
            const {id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer} = question
            return new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, this)
        })
        let firstQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
        localStorage.setItem('activeQuestionId', JSON.stringify(firstQuestion.id));
        firstQuestion.renderQuestion()
        this.renderGame()
        this.resetButton()
    }


    renderGame(){
        const scoreHolder = document.getElementById("score-box")
        let scoreTally = document.createElement("div")
        scoreTally.score = this.score 
        scoreTally.innerHTML += this.showHTML()
        scoreHolder.appendChild(scoreTally)

    }

    nextQuestion(){
        const activeQuestionId = localStorage.getItem('activeQuestionId')
        let dispatchedQuestion = false;
        let mixedUpQuestions = this.questions.map((a) => ({
            sort: Math.random(),
            value: a
        })).sort((a, b) => a.sort - b.sort).map((a) => a.value)
        mixedUpQuestions.forEach((question, i) => {
            if (i === 0 && question.id !== activeQuestionId) {
                localStorage.setItem('activeQuestionId', JSON.stringify(question.id));
                dispatchedQuestion = true
                question.renderQuestion()
            }
            if (!dispatchedQuestion && question.id === 1) {
                question.renderQuestion()
            }
        })
    }

    resetButton(){
        document.getElementById("reset").addEventListener("click", this.reset.bind(this));
    }

    reset(){
        this.score = 0
        document.getElementById("score").innerHTML = this.score
    }

    showHTML(){
        return `
        <div style='float: left;';>
        <h4>Correct Intervals: <div id="score">${this.score}</div></h4>
        </div>
        <div class="reset" style='float: right;'>
        <br>
        <input type="button" id="reset" value="Reset Score"/>
        </div>
        <br style="clear:both;"
        <br>`
    }
}