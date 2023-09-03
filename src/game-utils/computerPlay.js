

const computerPlay = (leadingSuit, computerCards, playerCard) => {
    const cards = [...computerCards]

    // level 0 : we choose the first card always
    const level0 = () => 0

    // level 1 : we choose randomly
    const level1 = () => Math.floor(Math.random() * cards.length) 

    // level 2 : a bit of decisiong making : we always play the card that has the least value
    const level2 = () => computerCards.indexOf(cards.sort((a, b) => a.value - b.value) [0])

    // level 3 : we play the biggest card
    const level3 = () => computerCards.indexOf(cards.sort((a, b) => b.value - a.value) [0])

    // level 4 : try to win if the player played a valuable card. By playing the leading suit if have it. fallback back is index 0
    const level4 = () => {
        if (playerCard && playerCard.value > 3) {
            const theCardToPlay = cards.find(card => card.suits.includes(leadingSuit.suits[0]))
            const theCardToPlayIndex = theCardToPlay ? cards.indexOf( theCardToPlay ) : 0
            return theCardToPlayIndex
        }
        return 0 // fallback
    }

    // level 5 : 
    
    
    // choosing which level to run
    return level4()

}

export default computerPlay