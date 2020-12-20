class Game {
    constructor(id, score){
        this.id = id
        this.score = score 
        this.renderGame()
    }

    // this.question = question ??

    renderGame(){
        const scoreHolder = document.getElementById("score-box")
        let scoreTally = document.createElement("div")
        scoreTally.score = this.score 
        scoreTally.innerHTML += this.showHTML()
        scoreHolder.appendChild(scoreTally)

    }

    showHTML(){
        return `
        <h4>Correct Intervals: ${this.score}</h4>`
    }

    // static updateScore(){
    //     let selectedAnswer = button.innerText
    //     this.score++;
    // }


    // if (selectedAnswer.innerText === this.correctAnswer.innerText){
    //     updateScore()
    // }
    
}