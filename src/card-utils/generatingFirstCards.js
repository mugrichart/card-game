
import cards from './card-collection';
import shuffledIndices from './shuffling';

let leadingSuitIndex = shuffledIndices.shift();
if (leadingSuitIndex > 23) { // we don't want the leading suit to be a joker card
    shuffledIndices.push(leadingSuitIndex)
    leadingSuitIndex = shuffledIndices.shift();
    if (leadingSuitIndex > 23) { // what if the jokers are adjacent
        shuffledIndices.push(leadingSuitIndex) // now we are sure we are not running the risk of coming across a joker
        leadingSuitIndex = shuffledIndices.shift();
    }
}
const leadingSuit = cards[leadingSuitIndex];

const opponentFirstFourCards = shuffledIndices.splice(0, 4).map(i => cards[i])
const playerFirstFourCards = shuffledIndices.splice(0, 4).map(i => cards[i])

export {
    leadingSuit, opponentFirstFourCards, playerFirstFourCards, shuffledIndices
}