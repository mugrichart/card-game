import React, { useState, useRef, useEffect } from 'react';
import './Content.css';
import { leadingSuit, opponentFirstFourCards, playerFirstFourCards, shuffledIndices } from '../../card-utils/generatingFirstCards';
import cards from '../../card-utils/card-collection';
import decidingTheNextPlayer from '../../game-utils/decidingPlayer';
import computerPlay from '../../game-utils/computerPlay';
import playEvaluation from '../../game-utils/playEvaluation';
import gameEvaluation from '../../game-utils/gameEvaluation';


let computerWinsBucket = [];
let playerWinsBucket = []

const Content = () => {
    const [computerCard, setComputerCard] = useState(null);
    const [playerCard, setPlayerCard] = useState(null);
    
    const [opponentCards, setOpponentCards] = useState(opponentFirstFourCards);
    const [playerCards, setPlayerCards] = useState(playerFirstFourCards);

    const [whoseTurn, setWhoseTurn] = useState([])
    const renderDoneRef = useRef(false);

    const [gameWinner, setGameWinner] = useState(null)
    
    const computerMoveHandle = () => {
        const computerMoveIndex = computerPlay(leadingSuit, opponentCards, playerCard);
        setComputerCard(opponentCards[computerMoveIndex])
        setOpponentCards(prev => prev.filter(card => card !== prev[computerMoveIndex]))
        setWhoseTurn(prev => [...prev, 'player'])
        
    }

    const playerMoveHandle = (index) => {
        if (whoseTurn[whoseTurn.length-1] !== 'player') return
        setPlayerCard(playerCards[index]);
        setPlayerCards(prev => prev.filter(card => card !== playerCards[index]))
        
        setWhoseTurn(prev => [...prev, 'computer'])
    }

    const evaluationTrigger = () => {
        let timeout;
        if ( computerCard && playerCard ) {
            const whoPlayedFirst = whoseTurn[0]
            setWhoseTurn([])
            timeout = setTimeout(()=>{
                const whoWon = playEvaluation(leadingSuit, playerCard, computerCard, whoPlayedFirst);
                if (whoWon === 'player') playerWinsBucket = [...playerWinsBucket, playerCard, computerCard]
                else computerWinsBucket = [...computerWinsBucket, playerCard, computerCard]
                if (!opponentCards.length && !playerCards.length) {
                    const whoIsGameWinner = gameEvaluation(playerWinsBucket, computerWinsBucket);
                    setGameWinner(whoIsGameWinner || 'draw')
                    playerWinsBucket = []
                    computerWinsBucket = []
                }
                
                setComputerCard(null);
                setPlayerCard(null);
                
                //console.log(cards[shuffledIndices[0]], cards[shuffledIndices[1]])
                if (shuffledIndices.length) {
                    const cardsToDistribute = [cards[shuffledIndices.shift()], cards[shuffledIndices.shift()]].map((card) => card || leadingSuit) // the card that won't get will pick the leadingSuit
                    whoWon === 'player' && ( () => { setPlayerCards(prev => [...prev, cardsToDistribute[0]]); setOpponentCards(prev => [...prev, cardsToDistribute[1]]) } ) ()
                    whoWon === 'computer' && ( () => { setOpponentCards(prev => [...prev, cardsToDistribute[0]]) ; setPlayerCards(prev => [...prev, cardsToDistribute[1]]) }) ()
                }
                                
                playSession(whoWon)

            }, 100);
        }

        //return () => clearTimeout(timeout);
    }

    useEffect(() => {
        console.log(playerCards, opponentCards)
    }, [playerCards, opponentCards])

    useEffect(() => {
        if (whoseTurn.length > 2) { // time for evaluation
            return evaluationTrigger()
        }

        if (whoseTurn[whoseTurn.length-1] === 'computer') {
            return computerMoveHandle()
        }

    }, [whoseTurn])

    

    const playSession = (whoWon) => {
        setWhoseTurn( [ decidingTheNextPlayer(whoWon) ] )
    }

    useEffect(() => {
        const renderFlag = renderDoneRef.current
        if (!renderFlag) {
            playSession();
            renderDoneRef.current = true;
        }
        
    }, [])

  return (
    <main>
        <div className="opponent-cards-area">
            
            {   gameWinner ? <h2 style={{ color: 'white'}}>{ ['player', 'computer'].includes(gameWinner) ? `${gameWinner} won`: 'Draw'}</h2> :
            
                opponentCards.map((card, index) => {
                    return  <div className={`image-container card${index}`} key={index} style={{transform: `rotate(${(index-((opponentCards.length-1)/2))*40}deg)`}}>
                                <img  src={card.src} alt="" />
                                {/* src="./placeholder-images/e.jpg" */}
                            </div>
                })
            }
        </div>

        <div className="playing-area">
            <div className='image-container computer-card'>{ computerCard ? <img className='computer-card' src={computerCard ? computerCard.src : ''} alt="Computer's card" /> : <h2>Computer's card</h2>}</div>            
            <div className="image-container leading-card"><img  src={leadingSuit.src} alt='leading card'/></div>
            <div className='image-container player-card'>{ playerCard ? <img src={playerCard ? playerCard.src : ''} alt="Player's card" /> : <h2>Player's card</h2>}</div>
        </div>
        

        <div className="player-cards-area">
            {
                playerCards.map((card, index) => {
                    // {console.log(index)}
                    return  <div className={`image-container card${index}`} key={index} onClick={() => playerMoveHandle(index)} style={{transform: `rotate(${(index-((playerCards.length-1)/2))*40}deg)`}}>
                                <img src={card.src} alt={`${['first', 'second', 'third', 'fourth'][index]} player's card`} />
                            </div>
                })
            }
        </div>
    </main>
  )
}

export default Content
