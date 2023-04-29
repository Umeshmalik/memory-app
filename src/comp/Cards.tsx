import { useContext, FC, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { context } from '../App';
import Card from './Card'

import { GridOptions } from "../types";

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
    const { setScore, gridElements, solvedAlphabet, setSolvedAlphabet, setChooseCard } = useContext(context)
    let [choosenCards, setChoosenCards] = useState('')
    const [choosenIdx, setChoosenIdx] = useState(-1)
    const checkIfSame = ({ alphabet, idx }: {alphabet: GridOptions, idx: number}) => {
        if (solvedAlphabet.includes(alphabet.value))
            return
        setChooseCard((prev: boolean) => !prev)
        if (choosenIdx !== idx && choosenCards !== '' && choosenCards === alphabet.value) {
            setChoosenIdx(-1)
            setSolvedAlphabet([...solvedAlphabet, alphabet.value])
            setChooseCard(false)
        } else if (choosenIdx === -1) {
            setChoosenCards(alphabet.value)
            setChoosenIdx(idx)
        } else {
            setChoosenCards('')
            if (!solvedAlphabet.includes(alphabet.value) && choosenIdx !== idx)
                setScore((prev: number) => prev + 1);
            setChoosenIdx(-1)
        }
    }
    return (
        <div className={styles.root}>
            {
                gridElements.map((alphabet: GridOptions, idx: number) => <div key={idx} onClick={() => {
                    if (idx !== choosenIdx)
                        checkIfSame({ alphabet, idx })
                }}>
                    <Card alphabet={alphabet} />
                </div>
                )
            }
        </div>
    )
}

export default Cards
