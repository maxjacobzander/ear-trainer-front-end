document.addEventListener("DOMContentLoaded", function(){
    API.addIntervals()
    document.getElementById("sound").addEventListener("click", API.playInterval)
})