

const decidingTheNextPlayer = (winner) => {
    const nextPlayer = winner || ['player', 'computer'][Math.floor(Math.random() * 2)] // in the beginning when there is no player.
    return nextPlayer
    //return 'computer'
    
}

export default decidingTheNextPlayer