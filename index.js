const playAudio = (url) => {
    let audio = new Audio("./sounds/" + url)
    audio.play()
}

function handleClick() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}

function handlePress(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
}

function makeSound(key) {
    switch (key) {
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

const buttonAnimation = (key) => {
    let activeButton = document.querySelector('.' + key);
    activeButton.classList.add('pressed');

    setTimeout(function() {activeButton.classList.remove('pressed')}, 100)
}

for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

document.addEventListener('keydown', handlePress)