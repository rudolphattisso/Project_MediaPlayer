
let tabPlaylist = [
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

function playAndPause() {

    if (isPlayed === false) {
        //cas ou la musique n'est pas lancée
        filePathAudio = "audio/" + tabPlaylist[index].file;
        mediaPlayer.src = filePathAudio;
        mediaPlayer.play();
        //affichage des innfos de la piste audio
        displayArtist.innerHTML=tabPlaylist[index].author
        displayTitle.innerHTML=tabPlaylist[index].title
        isPlayed = true;
        playButton.innerHTML = "&#10074;&#10074";
        console.log(isPlayed);
        
        //changement de symbole
        
        
    } else {
        mediaPlayer.pause();
        isPlayed = false
        console.log(isPlayed)
        playButton.innerHTML = "&#9658";
    }
    //pour tester 
    console.log(displayArtist);
    console.log(displayTitle);
    
};

playButton.addEventListener("click", playAndPause);



const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");


//logique des boutons next et back
function nextFunction() {
    index = (index + 1) % tabPlaylist.length; // je ne comprends pas encore bien son utilité mais ça marche; à éclaircir
    playAndPause();
    playButton.click;
    console.log(index);
    console.log(filePathAudio);


}
function backFunction() {
    if (index != 0) {
        index = (index - 1) % tabPlaylist.length;
        playAndPause();
        playButton.click // pourquoi ça ne marche pas?
        console.log(index)
        console.log(filePathAudio)
    } else {
        playAndPause
        
    }

}
//au clic, lancer les fonction next et back;
nextButton.addEventListener("click", nextFunction);
backButton.addEventListener("click", backFunction);

//logique boutons volume
const lowerVolumeButton = document.getElementById("lowerVolume");
const higherVolumeButton = document.getElementById("higherVolume");

mediaPlayer.volume = 0.5


function addVolume() {
    if (0 <= mediaPlayer.volume && mediaPlayer.volume <= 1) {

        mediaPlayer.volume += 0.1
    } else {

    };

};

function removeVolume() {
    if (0 <= mediaPlayer.volume && mediaPlayer.volume <= 1) {

        mediaPlayer.volume -= 0.1
    } else {

    };

};


higherVolumeButton.addEventListener("click", addVolume);
lowerVolumeButton.addEventListener("click", removeVolume);
//correction revoir codes erreurs affichés dans la console.


const sliderVolumeButtonn = document.getElementById("volume");
console.log(sliderVolumeButtonn.ariaValueNow);


function updateTrackInfo() {
    const tracksDisplay = document.getElementById("tracksDisplay");
    const covers = tracksDisplay.querySelectorAll(".covers");
  
    for (let index = 0; index < covers.length; index++) {
      const cover = covers[index];
      const titleElement = cover.querySelector(".titleTrack");
      const artistElement = cover.querySelector(".artisteTrack");
  
      titleElement.textContent = tabPlaylist[index].title;
      artistElement.textContent = tabPlaylist[index].author;
    }
  }


