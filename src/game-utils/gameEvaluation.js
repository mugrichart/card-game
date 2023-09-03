

const gameEvaluation = (playerWinsBucket, computerWinsBucket) => {

    playerWinsBucket.filter(card => card.value > 3)
    computerWinsBucket.filter(card => card.value > 3)

    // scenario 1 : someone wins right away with the card values
    const whoWonTheGame = playerWinsBucket > computerWinsBucket ? 'player' : playerWinsBucket < computerWinsBucket ? 'computer' : null
    console.log(whoWonTheGame)
    return whoWonTheGame
}

export default gameEvaluation