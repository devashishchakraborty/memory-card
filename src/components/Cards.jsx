import "../styles/Cards.css"
import { useEffect, useLayoutEffect, useState } from "react" 

function Cards({ gameInfo, setGameInfo, clickedCards, setClickedCards, currentDifficulty, setGameResult }) {
    // Getting current info
    const currentCards = gameInfo.find((game) => game.difficulty === currentDifficulty).cards;
    const currentHighScore = gameInfo.find((game) => game.difficulty === currentDifficulty).highScore;

    const shuffleArray = (array) => {
        // Applying Fisher-Yates (or Knuth) shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
                // Generate a random index from 0 to i
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements at i and j
                [array[i], array[j]] = [array[j], array[i]];
            }
        return array;
    }

    useEffect(() => {
        setGameInfo((prevGameInfo) => {
            let currentGame = prevGameInfo.find((game) => game.difficulty === currentDifficulty)
            // Updating the highScore and cards everytime clickedCards is changed
            currentGame.highScore = (clickedCards.length > currentHighScore ? clickedCards.length : currentHighScore)
            currentGame.cards = shuffleArray(currentCards)
            const updatedGameInfo = prevGameInfo.map((game) => {
                return (game.difficulty === currentDifficulty ? currentGame : game)
            })
            return updatedGameInfo;
        });
        // Checking if the player won
        if (clickedCards.length === currentCards.length) setGameResult("Win")
    }, [clickedCards]);

    const handleClick = (card) => {
        // Ending the game if card is clicked again.
        if (clickedCards.includes(card.id)) setGameResult("Lose")
        else setClickedCards((ids) => [...ids, card.id])
    }

    return (
        <div className="cardContainer">
            {
                currentCards.map((card) => (
                    <div className="card" key={card.id} onClick={() => handleClick(card)}>
                        <img src={card.image} alt={card.name} />
                        <div className="name">{card.name}</div>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Cards;