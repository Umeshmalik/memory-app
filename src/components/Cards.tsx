import { useContext, FC, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { context } from '../App';
import Card from './Card'

import { AllowedAlphabets, GridOptions } from "../types";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplate: '5rem 5rem 5rem 5rem / 22% 22% 22% 22%',
        margin: '2% 10% 2% 10%',
        placeContent: 'center'
    }
})
const Cards: FC = () => {
    const styles = useStyles();
    const { setScore, gridElements, setSolvedAlphabet } = useContext(context)
    const [disable, setDisable] = useState(false);
    const [chosenCards, setChosenCards] = useState<Array<number>>([]);

    const checkIfSame = ({ alphabet, idx }: { alphabet: GridOptions, idx: number }) => {
        if (chosenCards.includes(idx)) return;
        if (chosenCards.length === 0) {
            setChosenCards([idx]);
            return;
        }
        if (gridElements[chosenCards[0]].value === alphabet.value) {
            setSolvedAlphabet((prev: Array<AllowedAlphabets>) => [...prev, alphabet.value])
            setScore((prev: number) => prev + 1);
        }
        setChosenCards((prev: Array<number>) => [...prev, idx])
        setDisable(true);
        setTimeout(() => {
            setChosenCards([])
            setDisable(false);
        }, 1000);
    }

    return (
        <div className={styles.root}>
            {gridElements.map((alphabet: GridOptions, idx) => <Card key={idx} disable={disable || chosenCards.includes(idx)} visible={chosenCards.includes(idx)} idx={idx} alphabet={alphabet} checkIfSame={checkIfSame} />)}
        </div>
    )
}

export default Cards
