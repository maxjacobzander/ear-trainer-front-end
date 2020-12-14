document.addEventListener("DOMContentLoaded", function(){
    API.addIntervals()

    
})

const soundButton = document.getElementById("sound");

let sound = document.getElementById("interval");

const nextButton = document.getElementById('next');

const option1 = document.getElementById('interval1');

const option2 = document.getElementById('interval2');

const option3 = document.getElementById('interval3');

const option4 = document.getElementById('interval4');

// const randomizeIntervals, currentInterval

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