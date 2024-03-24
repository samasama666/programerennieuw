document.querySelector("h1").textContent = "Take care of your pet :D"
  
let cat = document.querySelector('#cat');
let etenKnop = document.querySelector('#etenKnop');
let douchenKnop = document.querySelector('#douchenKnop');
let slaapKnop = document.querySelector('#slaapKnop');

// credits naar red en lam
let origineleAfbeelding = cat.src;
const etenAudio = new Audio("img/eating-sound-effect-36186.mp3")
const doucheAudio = new Audio("img/shower-14461.mp3")
const slaapAudio = new Audio("img/snoring-6773 (mp3cut.net).mp3")


// hulp gekregen van Joep :)
// Function to reset het plaatje 
function resetImageAfterDelay() {
    setTimeout(function() {
        cat.src = origineleAfbeelding;
    }, 2500); // vergeet het niet te veranderen in milliseconden
}

// Event listeners voor de buttons. hulp van een 4de jaars.
etenKnop.addEventListener('click', eten);
douchenKnop.addEventListener('click', douchen);
slaapKnop.addEventListener('click', slapen);

function eten() {
    cat.src = 'img/catfoood.png'; 
    console.log('cat eet'); 
    resetImageAfterDelay();
    etenAudio.play()
    Seconds = 30
}

function douchen() {
    cat.src = 'img/cat.png';
    console.log('douchenKnop');
    resetImageAfterDelay();
    doucheAudio.play()
    Seconds = 30
}

function slapen() {
    cat.src = 'img/catslaap.png';
    console.log('slaapKnop');
    resetImageAfterDelay();
    slaapAudio.play()
    Seconds = 30
}

function dood() {
    cat.src = 'img/catdead.jpeg';
    console.log('cat is dood')
    
}

Seconds = 30;

// de countdown functie en de settimeout functie heb ik hulp bij gekregen van lam
function countdown() {
    Seconds--
    document.getElementById("Time").innerHTML = String(Seconds)
    if (Seconds > 0) {
        setTimeout(countdown, 1000)
    }
    else {
    dood()
    alert('oh, Kitty is dood☠️!')
    }
}

setTimeout(countdown, 1000)

let count = 60;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer); 
  }
}, 1000);

// dit stukje code van de refresh knop heb ik van blackbox.ai
// Select refresh button element
const refreshButton = document.querySelector('#refreshButton');

// Add click event listener
refreshButton.addEventListener('click', function() {
  location.reload();
});

