
let tabPlaylist =[
    {
        author: "Silent Patner",
        title: "Blue Skies",
        file: "Blue_Skies.mp3",
        image: "1.jpg"

    },
    {
        author: "Media Right Production",
        title: "Cartoon Hoedown",
        file: "Cartoon_Hoedown.mp3",
        image: "2.jpg"
    
    },
    {
        author: "Jingle Punks",
        title: "Earthy Crust",
        file: "Earthy_Crust.mp3",
        image: "3.jpg"
    
    },
    {
        title: "Hold On a Minute",
        author: "Silent Partner",
        file: "Hold_On_a_Minute.mp3",
        image: "4.jpg"
    
    },
    {
        author: "City of Prague Philharmonic",
        title: "John Dunbar Theme",
        file: "JohnDunbarTheme.mp3",
        image: "5.jpg"
    
    },
    {
        author: "Silent Partner",
        title: "Stay with You",
        file: "Stay_With_You.mp3",
        image: "6.jpg"
    
    },

    {
        author: "Beethoven",
        title: "Symphony No. 5 (by Beethoven)",
        file: "Symphony_No_5_by_Beethoven.mp3",
        image: "7.jpg"
    
    },

]

// mon lecteur audio: mediaplayer
const mediaPlayer = new Audio();
const playButton = document.getElementById("play");
var displayArtist = document.getElementById("artist")
var displayTitle = document.getElementById("title");
var filePathAudio = "";
// var audioAttribut = document.getElementById("audioTag").src
let isPlayed = false;
//pour changer de musique
let index = 0

function playAndPause(){
    
        if (isPlayed === false) {
            //cas ou la musique n'est pas lancée
            filePathAudio = "audio/"+tabPlaylist[index].file;
            mediaPlayer.src = filePathAudio;
            mediaPlayer.play();
    
            isPlayed = true;
            playButton.innerHTML="&#10074;&#10074";
            
            console.log(isPlayed);
            
            //changement de symbole
            
            
        } else {
            mediaPlayer.pause();
            isPlayed = false
            console.log(isPlayed)
            playButton.innerHTML="&#9658";
        }
    };

playButton.addEventListener("click", playAndPause);

const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");

let isNext=false;


function nextFunction(){
    index = (index + 1) % tabPlaylist.length; // increment index and wrap around to 0 if necessary
    playAndPause(); // call playAndPause to play the new song
    playButton.click
    console.log(index)
    console.log(filePathAudio)
     

}

nextButton.addEventListener("click", nextFunction);




