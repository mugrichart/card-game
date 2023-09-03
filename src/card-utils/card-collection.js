
const suitsCollection = ['spades', 'clubs', 'hearts', 'diamonds'];
const srcHome = 'card-images';
const numbers = ['6', 'queen', 'jack', 'king', '7', 'ace']

let cards = []

numbers.forEach((number, index) => {
    suitsCollection.forEach((suit) => {
        const card = {
            number: number,
            value: index,
            suits: [suit],
            src: `${srcHome}/${number}-${suit}.png` 
        };
        cards.push(card);
    });
});

cards.push(
    {
        number: 'joker',
        value: 6,
        suits: ['hearts', 'diamonds'],
        src: `${srcHome}/joker-red.png`
    }
)
cards.push(
    {
        number: 'joker',
        value: 6,
        suits: ['spades', 'clubs'],
        src: `${srcHome}/joker-black.png`
    }
)

// console.log(cards)

export default cards