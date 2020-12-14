class Game {
    constructor(id, score){
        this.id = id
        this.score = score 
        this.renderGame()
    }

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

    updateScore(){
        this.score++;
    }


    // if (selectedAnswer.innerText === this.correctAnswer.innerText){
    //     updateScore()
    // }
    
}