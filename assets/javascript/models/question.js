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

    let questions = [];
    
    gatherQuestions(){
        debugger

        const option1 = document.getElementById('interval1');

        const option2 = document.getElementById('interval2');

        const option3 = document.getElementById('interval3');

        const option4 = document.getElementById('interval4');

        fetch("http://localhost:3000/questions")
            .then(resp => resp.json)
            .then((gatheredQuestions) => {
                questions = gatheredQuestions;
            })

        option1.innerText = this.answer_1

    }

    let currentInterval = {};
    let score = 0;
    let questionCounter = 0;
    let remainingInterval = [];

    play(){
   
    }

    const nextButton = document.getElementById('next');

    // function nextInterval() {
    //     console.log("Now we play the next interval and repopulate the answer options")
    // }
    
    // nextButton.addEventListener('click', nextInterval)
    

}