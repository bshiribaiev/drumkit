const playAudio = (url) => {
    let audio = new Audio("./sounds/" + url)
    audio.play()
}

function handleClick() {
    let buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            playAudio("tom-1.mp3");
        break;

        case "a":
            playAudio("tom-2.mp3");
        break;

        case "s":
            playAudio("tom-3.mp3")
        break;

        case "d": 
            playAudio("tom-4.mp3");
            break;

        case "j":
            playAudio("snare.mp3");
            break;

        case "k":
            playAudio("crash.mp3");
            break;

        case "l":
            playAudio("kick.mp3");
            break;

        default: console.log(buttonInnerHTML)
    }
}

for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


