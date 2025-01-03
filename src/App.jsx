import { useState } from 'react';
import './App.css';
import logo from "/Kimetsu_no_Yaiba_Logo.svg";
import Cards from './components/Cards';
import characters from "./assets/data/characters.js"
import GameOver from './components/GameOver.jsx';


function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [gameResult, setGameResult] = useState(null);
  const [difficulty, setDifficulty] = useState("easy")

  // Using a gameInfo Object state insted of individual states.
  const [gameInfo, setGameInfo] = useState([
    {
      difficulty: "easy",
      highScore: 0,
      cards: characters.slice(0, 6)
    },
    {
      difficulty: "medium",
      highScore: 0,
      cards: characters.slice(0, 10)
    },
    {
      difficulty: "hard",
      highScore: 0,
      cards: characters
    }
  ])

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
    setClickedCards([]);
  }

  return (
    <>
      {
        gameResult && 
        <GameOver 
          gameResult={gameResult} 
          setGameResult={setGameResult} 
          setClickedCards={setClickedCards} 
        />
      }

      <header>
        <img src={logo} alt="" />
        MemorY CarD
      </header>

      <main>
        <div className='infoPanel'>

          {/* Section to change difficulty */}
          <div className='selectDifficulty'>
            <label for="difficulty">Select Difficulty: </label>
            <select name="difficulty" id="difficulty" value={difficulty} onChange={handleDifficulty}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className='instruction'>Try not to click a card twice!</div>
          
          <div className='scoreBoard'>
            {
              /* Using the clickedCards list to update current Score. 
              Any Changes made on that list would update the score automatically. */
            }
            <div className="currentScore">Current Score : {clickedCards.length}</div>
            <div className="highScore">High Score : {gameInfo.find((game) => game.difficulty === difficulty).highScore}</div>
          </div>

        </div>

        <Cards
          currentDifficulty={difficulty}
          gameInfo={gameInfo}
          setGameInfo={setGameInfo}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          setGameResult={setGameResult}
        />

      </main>
      <footer>
        <a href="https://github.com/devashishchakraborty/memory-card" target='_blank'>
          Built by Devashish&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
        </a>
      </footer>
    </>
  )
}

export default App
