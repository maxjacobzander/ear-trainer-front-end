class API {
    static addIntervals (){
        fetch("http://localhost:3000/games")
        .then(resp => resp.json())
        .then(game => {
            game.forEach(game => {
                const{id, score} = game
            })
        } )
    }
}