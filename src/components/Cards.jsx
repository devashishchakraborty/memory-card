import "../styles/Cards.css"
import { useEffect, useLayoutEffect, useState } from "react" 

function Cards({ cards, setCards, clickedCards, setClickedCards, setHighScore, setGameResult }) {
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
        setCards((cards) => shuffleArray(cards));
        setHighScore((highScore) => (clickedCards.length > highScore ? clickedCards.length : highScore));
    }, [clickedCards]);

    const handleClick = (card) => {
        if (clickedCards.includes(card.id)){
            setGameResult(clickedCards.length === cards.length ? "Win" : "Lose")
        } else {
            setClickedCards((ids) => [...ids, card.id])
        }
    }

    return (
        <div className="cardContainer">
            {
                cards.map((card) => (
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