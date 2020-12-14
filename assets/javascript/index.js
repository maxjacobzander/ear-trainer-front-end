document.addEventListener("DOMContentLoaded", function(){
    API.addIntervals()
})

const soundButton = document.getElementById("sound");

let sound = document.getElementById("interval");


function playInterval() {
    sound.play();
}

soundButton.addEventListener('click', playInterval);




function answerInterval() {
    
}

function newGame() {
    counter = 0,
    randomizeIntervals = intervals.sort(() => Math.random() - .5)
    currentInterval = 0
}