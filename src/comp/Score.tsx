import { useContext, FC } from 'react';
import { context } from '../App';

const ScoreDisplay: FC = () => {
    const {score, solvedAlphabet} = useContext(context)
    if(solvedAlphabet.length === 8){
        window.location.reload();
    }
    return (
        <div>
            <p>Total Matches Played : {solvedAlphabet.length}</p>
            <p>Total Number of Moves Used : {score}</p>
        </div>
    )
}

export default ScoreDisplay
