class API {
    static addIntervals(){
        fetch("http://localhost:3000/games")
        .then(resp => resp.json())
        .then(games => {
            games.forEach(g => {
                const{id, score, questions} = g
                new Game(id, score, questions)
            })
        } )
    }

   
    static playInterval() {
        document.getElementById(`interval`).play();
    }
}