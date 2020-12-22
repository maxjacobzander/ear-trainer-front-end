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

    resetButton(){
        document.getElementById("reset").onclick = reset();
    }

    reset(){
        const score = this.score;
        return (score = 0)
    }

    showHTML(){
        return `
        <div style='float: left;'>
        <h4>Correct Intervals: <div id="score">${this.score}</div></h4>
        </div>
        <div style='float: right;'>
        <br>
        <button id="reset">Reset Score</button>
        </div>
        <br><br><br>`
    }

    // static updateScore(event){
    //     let answer1 = (document.getElementById('interval1').innerText)
    //     let answer2 = (document.getElementById('interval2').innerText)
    //     let answer3 = (document.getElementById('interval3').innerText)
    //     let answer4 = (document.getElementById('interval4').innerText)
    //     switch(event.target){
    //         case answer1 === Question.correct_answer:
    //             console.log("score = (score + 1)");
    //             break;
    //         case answer2 === Question.correct_answer:
    //             score = (score + 1);
    //             break;
    //         case answer3 === Question.correct_answer:
    //             score = (score + 1);
    //             break;
    //         case answer4 === Question.correct_answer:
    //             score = (score + 1);
    //             break;
    //     }
    // }
}