class Question {
    constructor(interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id){
        this.interval = interval
        this.answer_1 = answer_1
        this.answer_2 = answer_2
        this.answer_3 = answer_3
        this.answer_4 = answer_4
        this.correct_answer = correct_answer
        this.game_id = game_id
    }

    
    function nextInterval() {
        console.log("Now we play the next interval and repopulate the answer options")
    }
    
    nextButton.addEventListener('click', nextInterval)

}