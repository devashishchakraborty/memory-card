import "../styles/Cards.css"
import { useState } from "react" 

function Cards({ cards, setCards, setCurrentScore }) {
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