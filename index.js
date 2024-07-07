// Map each button and key to a corresponding sound file
const soundMap = {
    'w': 'sounds/crash.mp3',
    'a': 'sounds/kick-bass.mp3',
    's': 'sounds/snare.mp3',
    'd': 'sounds/tom-1.mp3',
    'j': 'sounds/tom-2.mp3',
    'k': 'sounds/tom-3.mp3',
    'l': 'sounds/tom-4.mp3'
};

// Function to play sound
function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

// Function to animate button
function buttonAnimate(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Add event listeners to all drum buttons
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        const buttonClass = this.classList[0]; // Get the first class (w, a, s, d, j, k, l)
        const sound = soundMap[buttonClass]; // Get the corresponding sound
        if (sound) {
            playSound(sound);
            buttonAnimate(buttonClass);
        }
    });
});

// Add event listener for keypress events
document.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase(); // Get the pressed key
    const sound = soundMap[key]; // Get the corresponding sound
    if (sound) {
        playSound(sound);
        buttonAnimate(key);
    }
});