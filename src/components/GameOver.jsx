import "../styles/GameOver.css"
import { useEffect, useState } from "react";
function GameOver({ gameResult, setGameResult, setClickedCards }){  
  const handleClick = () => {
    setGameResult(null);
    setClickedCards([]);
  }
  return (
    <div className="gameOverContainer">
      <div className="gameResultBox">
        You {gameResult}!.
        <button className="playAgainBtn" onClick={handleClick}>
          Play Again?
        </button>
      </div>
    </div>
  )
}

export default GameOver;