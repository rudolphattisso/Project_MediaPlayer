const playButton = document.getElementById("play");

var audioBlue = document.getElementById("blue")


let isPlayed = false;


playButton.addEventListener("click", e => {
    if (isPlayed == false) {
        //cas ou la musique n'est pas lancée
        audioBlue.play();
        isPlayed = true;
        console.log(isPlayed);
        //changement de symbole
        playButton.innerHTML="&#10074;&#10074";
        

    } else {
        audioBlue.pause();
        isPlayed = false
        console.log(isPlayed)
        playButton.innerHTML="&#9658";
    }
});




// playButton.addEventListener("click", e =>{
//     audioBlue.play();
//     isPlayed=true;
//     console.log(isPlayed)
// });


