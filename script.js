document.querySelector("h1").textContent = "Take care of your pet :D"
  
let cat = document.querySelector('#cat');
let etenKnop = document.querySelector('#etenKnop');
let douchenKnop = document.querySelector('#douchenKnop');
let slaapKnop = document.querySelector('#slaapKnop');

let origineleAfbeelding = cat.src;
const etenAudio = new Audio("img/eating-sound-effect-36186.mp3")
const doucheAudio = new Audio("img/shower-14461.mp3")
const slaapAudio = new Audio("img/snoring-6773 (mp3cut.net).mp3")

function eten() {
    cat.src = 'img/catfoood.png'; 
    console.log('cat eet'); 
    resetImageAfterDelay();
    etenAudio.play()
}

function douchen() {
    cat.src = 'img/cat.png';
    console.log('douchenKnop');
    resetImageAfterDelay();
    doucheAudio.play()
}

function slapen() {
    cat.src = 'img/catslaap.png';
    console.log('slaapKnop');
    resetImageAfterDelay();
    slaapAudio.play()
}

// Function to reset het plaatje
function resetImageAfterDelay() {
    setTimeout(function() {
        cat.src = origineleAfbeelding;
    }, 2000); // vergeet het niet te veranderen in milliseconden
}

// Event listeners voor de buttons
etenKnop.addEventListener('click', eten);
douchenKnop.addEventListener('click', douchen);
slaapKnop.addEventListener('click', slapen);

let myName = 'sama';
console.log(myName)