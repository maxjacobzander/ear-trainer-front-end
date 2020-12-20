class API {
    static addIntervals(){
        fetch("http://localhost:3000/games")
        .then(resp => resp.json())
        .then(game => {
            game.forEach(game => {
                const{id, score} = game
                new Game(id, score)
            })
        } )
    }

    static gatherQuestions(){
        fetch("http://localhost:3000/questions")
            .then(resp => resp.json())
            .then(questions => {
                let mixedUpQuestions = questions.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)
                mixedUpQuestions.forEach(question => {
                    const {id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id} = question
                    new Question(id, interval, answer_1, answer_2, answer_3, answer_4, correct_answer, game_id)
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
    randomizeIntervals = intervals.sort(() => Math.random() - .5)
    currentInterval = 0
}
}