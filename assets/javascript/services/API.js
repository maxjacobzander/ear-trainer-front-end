class API {
    static addIntervals(){
        fetch("http://localhost:3000/games")
        .then(resp => resp.json())
        .then(games => {
            games.forEach(g => {
                const{id, score} = g
                game = new Game(id, score)
            })
        } )
    }

    static gatherQuestions(){
        const activeQuestionId = localStorage.getItem('activeQuestionId')
        let dispatchedQuestion = false;
        fetch("http://localhost:3000/questions")
            .then(resp => resp.json())
            .then(questions => {
                let mixedUpQuestions = questions.map((a) => ({
                    sort: Math.random(),
                    value: a
                })).sort((a, b) => a.sort - b.sort).map((a) => a.value)
                mixedUpQuestions.forEach((question, i) => {
                    const {id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id} = question
                    if (i === 0 && id !== activeQuestionId) {
                        localStorage.setItem('activeQuestionId', JSON.stringify(id));
                        dispatchedQuestion = true
                        return new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id)
                    }
                    if (!dispatchedQuestion && id === 1) {
                        return new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id)
                    }
                })
            }
         )
    }

    static playInterval() {
        // e.target.className.play();
        document.getElementById(`interval`).play();
    }

    static answerInterval() {
        
    }



// soundButton = document.getElementById("sound");

// sound = document.getElementById("interval");


// soundButton.addEventListener('click', playInterval);


newGame() {
    counter = 0,
    currentInterval = 0
}
}