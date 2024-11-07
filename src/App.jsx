import { useState } from 'react';
import './App.css';
import logo from "/Kimetsu_no_Yaiba_Logo.svg";
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import characters from "./assets/data/characters.js"


function App() {
  const [cards, setCards] = useState(characters);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  /*
    TODOS: 
    1. Download Images to be used a Cards from Demon Slayer Anime.
    2. Create Component for each section of the app which involves.
    3. Convert image files into object attributes

  */

  return (
    <>
    <header>
      <img src={logo} alt="" />
      MemorY CarD
    </header>
    <main>
      <Scoreboard />
      <Cards cards={cards} setCards={setCards} setCurrentScore={setCurrentScore}/>
    </main>
    <footer></footer>
    </>
  )
}

export default App
