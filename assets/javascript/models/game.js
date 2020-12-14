class Game {
    constructor(id, score){
        this.id = id
        this.score = score 
        this.renderGame()
    }

    renderGame(){
        const gameHolder = document.getElementById("score-box")
        let scoreTally = document.createTextNode
        scoreTally.dataset.score = this.score
        scoreTally.score = this.score 
        scoreTally.innerHTML += this.showHTML()
        gameHolder.appendChild(scoreTally)

    }

    showHTML(){
        return `
        <h4>Correct Intervals: ${this.score}</h4>`
    }
}