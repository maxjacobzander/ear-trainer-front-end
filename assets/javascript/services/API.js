class API {
    static addIntervals (){
        fetch("http://localhost:3000/questions")
        .then(resp => resp.json())
        .then(console.log)
    }
}