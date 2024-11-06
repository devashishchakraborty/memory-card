import { useState } from 'react'
import './App.css'
import logo from "/logo.png"
import Scoreboard from './components/Scoreboard'

function App() {
  const [count, setCount] = useState(0)

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
    </main>
    <footer></footer>
    </>
  )
}

export default App
