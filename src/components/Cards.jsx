import "../styles/Cards.css"
import { useState } from "react" 

function Cards({ cards, setCards, setCurrentScore }) {

    function shuffleCards(cards){
        for (let i = cards.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at i and j
            [cards[i], cards[j]] = [cards[j], cards[i]];
          }
          return cards;
    }

    const handleClick = () => {
        setCards((cards) => shuffleCards(cards))
    }

    return (
        <div className="cardContainer">
            {
                cards.map((card) => {
                    return (
                    <div className="card" key={card.id} onClick={handleClick}>
                        <img src={card.image} alt={card.name} />
                        <div className="name">{card.name}</div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;