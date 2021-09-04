import React, { useContext } from 'react'
import { context } from '../App'

function ScoreDisplay() {
    const {score, solvedAlphabet} = useContext(context)
    if(solvedAlphabet.length === 8){
        window.location.reload('You Completed Game \n Press Leave Page to Restart Page')
    }
    return (
        <div>
            <p>Total Matches Played : {solvedAlphabet.length}</p>
            <p>Total Number of Moves Used : {score}</p>
        </div>
    )
}

export default ScoreDisplay
