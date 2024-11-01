// Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Costume Suggestion Logic
const costumes = [
    "Ghost",
    "Vampire",
    "Witch",
    "Zombie",
    "Pirate",
    "Werewolf",
    "Mummy",
    "Pumpkin",
    "Clown",
    "Skeleton",
    "Fairy",
    "Devil",
    "Alien",
    "Mermaid",
    "Wizard",
    "Bat"
];

function suggestCostume() {
    const costume = costumes[Math.floor(Math.random() * costumes.length)];
    const result = document.getElementById("costume-result");
    result.textContent = `Try dressing up as a ${costume}!`;
    result.style.animation = "costumeFade 0.8s ease-in-out forwards";

    // Reset animation
    setTimeout(() => {
        result.style.animation = "none";
    }, 800);
}

// Header Ghost Effect
const header = document.querySelector('header');
const ghosts = 15;

for (let i = 0; i < ghosts; i++) {
    const ghost = document.createElement('span');
    ghost.classList.add('ghost');
    ghost.style.left = `${Math.random() * 100}%`;
    ghost.style.animationDelay = `${Math.random() * 2}s`;
    header.appendChild(ghost);
}
