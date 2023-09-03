

const cardCount = 26;
const shuffledIndices = [];

// Generate an array of indices from 0 to 25
for (let i = 0; i < cardCount; i++) {
    shuffledIndices.push(i);
}

// Shuffle the indices using the Fisher-Yates shuffle
for (let i = cardCount - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]]; // Swap elements
}

// Now you have an array of shuffled indices from 0 to 25.
export default shuffledIndices