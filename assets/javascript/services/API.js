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



// soundButton = document.getElementById("sound");

// sound = document.getElementById("interval");


static playInterval() {
    document.getElementById("interval").play();
}

// soundButton.addEventListener('click', playInterval);




answerInterval() {
    
}

newGame() {
    counter = 0,
    randomizeIntervals = intervals.sort(() => Math.random() - .5)
    currentInterval = 0
}
}