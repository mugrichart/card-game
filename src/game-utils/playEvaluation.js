

const playEvaluation = (leadingSuit, playerMoveCard, computerMoveCard, whoPlayedFirst) => {

    // scenario 1: when the two players have the same suit
    const theyHaveSameSuit = Boolean( playerMoveCard.suits.find((suit) => computerMoveCard.suits.includes(suit)) )
    if (theyHaveSameSuit) return playerMoveCard.value > computerMoveCard.value ? 'player' : 'computer'

    // scenario 2: they are not the same suit by maybe one of them has the leading suit, which automatically makes it the winner
    const eitherHasTheLeadingSuit = playerMoveCard.suits.includes(leadingSuit.suits[0]) ? 
            'player' : computerMoveCard.suits.includes(leadingSuit.suits[0]) ? 
            'computer':
            null
    if (eitherHasTheLeadingSuit) return eitherHasTheLeadingSuit

    // scenario 3: They don't have the same suit and neither has the leading suit. The default winner is the one that played first
    
    return whoPlayedFirst

    // return ['player', 'computer'][Math.floor(Math.random() * 2)]
}

export default playEvaluation