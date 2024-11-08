import { useState } from 'react';
import './App.css';
import logo from "/Kimetsu_no_Yaiba_Logo.svg";
import Cards from './components/Cards';
import characters from "./assets/data/characters.js"
import GameOver from './components/GameOver.jsx';


function App() {
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(characters);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameResult, setGameResult] = useState(null);

  return (
    <>
    {gameResult && <GameOver gameResult={gameResult} setGameResult={setGameResult} setClickedCards={setClickedCards}/>}
    
    <header>
      <img src={logo} alt="" />
      MemorY CarD
    </header>
    <main>

      <div className='scoreBoard'>
          <div className="currentScore">Current Score : {clickedCards.length}</div>
          <div className="highScore">High Score : {highScore}</div>
      </div>

      <Cards 
        cards={cards} 
        setCards={setCards}
        clickedCards={clickedCards}
        setHighScore={setHighScore}
        setClickedCards={setClickedCards}
        setGameResult={setGameResult}
      />
    
    </main>
    <footer></footer>
    </>
  )
}

export default App
