const soundButton = document.getElementById("sound")

const nextButton = document.getElementById('next');

const option1 = document.getElementById('interval1');

const option2 = document.getElementById('interval2');

const option3 = document.getElementById('interval3');

const option4 = document.getElementById('interval4');

const randomizeIntervals, currentInterval

function playInterval() {
    console.log("I'm playing an interval!")
}

soundButton.addEventListener('click', playInterval);

function populateAnswers() {
    
}

function nextInterval() {
    console.log("Now we play the next interval and repopulate the answer options")
}

nextButton.addEventListener('click', nextInterval)


function answerInterval() {
    
}

function newGame() {
    counter = 0,
    randomizeIntervals = intervals.sort(() => Math.random() - .5)
    currentInterval = 0
}