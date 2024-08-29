
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
        author: "Silent Partner",
        title: "Hold On a Minute",
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

    {
        author: "Silent Patner",
        title: "Blue Skies",
        file: "Blue_Skies.mp3",
        image: "1.jpg"

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
        displayArtist.innerHTML = tabPlaylist[index].author
        displayTitle.innerHTML = tabPlaylist[index].title
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
    tic();
};

function updateTrackInfo() {
    const tracksDisplay = document.getElementById("tracksDisplay");
    //création du tableau
    const covers = tracksDisplay.querySelectorAll(".covers");

    for (let index = 0; index < covers.length; index++) {
        const cover = covers[index];
        cover.addEventListener("click", e => {
            git
            mediaPlayer.src = "audio/"+ tabPlaylist[index].file;
            mediaPlayer.play
            console.log(mediaPlayer.src);
            //
        });
  
        //   const titleElement = cover.querySelector(".titleTrack");
        //   const artistElement = cover.querySelector(".artisteTrack");

        //   titleElement.textContent = tabPlaylist[index].title;
        //   artistElement.textContent = tabPlaylist[index].author;
    }
}
updateTrackInfo();

playButton.addEventListener("click", playAndPause);
const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");


//logique des boutons next et back
function nextFunction() {

    if (index < tabPlaylist.length - 1) {
        index += 1
        isPlayed = false
        playAndPause();
    }
}

function backFunction() {
    if (index > 0) {
        index -= 1;
        isPlayed = false
        playAndPause();
    }

}
//au clic, lancer les fonction next et back;
nextButton.addEventListener("click", nextFunction);
backButton.addEventListener("click", backFunction);

//logique boutons volume
const lowerVolumeButton = document.getElementById("lowerVolume");
const higherVolumeButton = document.getElementById("higherVolume");
const sliderVolumeButton = document.getElementById("volume");

mediaPlayer.volume = 0.5;

function addVolume() {
    console.log(mediaPlayer.volume)
    if (mediaPlayer.volume < 0.9) {

        mediaPlayer.volume += 0.1;
        //lier slider au bouton volume à sa nouvelle valeur
        sliderVolumeButton.value = Math.round(mediaPlayer.volume * 10);
        console.log(sliderVolumeButton.value)

    } else if (mediaPlayer.volume >= 0.9) {
        mediaPlayer.volume = 1;
    }

};

function removeVolume() {
    console.log(mediaPlayer.volume)
    if (0.1 < mediaPlayer.volume) {
        mediaPlayer.volume -= 0.1
        //lier slider au bouton volume à sa nouvelle valeur
        sliderVolumeButton.value = Math.round(mediaPlayer.volume * 10);

    } else if (mediaPlayer.volume <= 0.1) {
        mediaPlayer.volume = 0;

    }

};

higherVolumeButton.addEventListener("click", addVolume);
lowerVolumeButton.addEventListener("click", removeVolume);


sliderVolumeButton.addEventListener("input", e => {

    mediaPlayer.volume = sliderVolumeButton.value / 10;
})


//fonction qui fait évoluer le slider de progression de la chanson;
const progressSlider = document.getElementById("progress");
let durationMedia = mediaPlayer.duration;
let sliderProgressVAlue = progressSlider.value

console.log("quel est le statut :" + isPlayed)

function tic() {
    if (isPlayed != false) {
        setTimeout(function () {
            console.log(mediaPlayer.currentTime);
            progressSlider.value = (mediaPlayer.currentTime * 100) / mediaPlayer.duration;
            tic();
        }, 1000);

        console.log("quel est le statut aorès set time out :" + isPlayed)
    }
};

progressSlider.addEventListener("input", e => {
    mediaPlayer.currentTime = mediaPlayer.duration * progressSlider.value / 100
});

















