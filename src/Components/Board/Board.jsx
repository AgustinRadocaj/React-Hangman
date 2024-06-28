import { useState } from "react"
const Board = () => { 

    const [selectedWord, setSelectedWord] = useState("")

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const words = ['apple', 'banana', 'cherry', 'date', 'eggplant']

    const handleStart = () => {
        setSelectedWord(words[Math.floor(Math.random() * words.length)])
    }

    const handleReset = () => {
        setSelectedWord(words[Math.floor(Math.random() * words.length)])
    }

    return (
    <div className="container">
        <div className="controls">
            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
        <div className="word">
            <div className="selected-word">{selectedWord}</div>
        </div>
            <div className="keyboard">
            {alphabet.map(letter => 
             <button 
             className="key" 
             value={letter} 
             onClick={(e) => console.log(e.target.value)}
             >{letter}</button>)} 
            </div>
    </div>
    )
}

export default Board