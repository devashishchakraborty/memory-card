import "../styles/Scoreboard.css"

function Scoreboard({ currentScore = 0, bestScore = 0 }){
    return (
        <div className='scores'>
            <div className="currentScore">Current Score : {currentScore}</div>
            <div className="bestScore">Best Score : {bestScore}</div>
        </div>
    )
}

export default Scoreboard;