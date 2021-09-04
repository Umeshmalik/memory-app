import { makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { context } from '../App';
import Card from './Card'

const useStyles = makeStyles({
    root:{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        margin:'2% 10% 2% 10%',
    }
})
function Cards() {
    const styles = useStyles();
    const {setScore, gridElements, solvedAlphabet, setSolvedAlphabet}  = useContext(context)
    let choosenCards = ''
    let choosenIdx = -1
    const checkIfSame = ({alphabet, idx}) =>{
        if(!solvedAlphabet.includes(choosenCards) && choosenIdx !== idx  && choosenCards !== '' && choosenCards === alphabet.value){
            choosenCards = ''
            choosenIdx = -1
            setSolvedAlphabet([...solvedAlphabet,alphabet.value])
        }else if(choosenCards === ''){
            if(!solvedAlphabet.includes(alphabet.value))
                choosenCards = alphabet.value
                choosenIdx = idx
        }else{
            choosenCards = ''
            if(!solvedAlphabet.includes(alphabet.value) && choosenIdx !== idx)
                setScore(prev => prev+1);
            choosenIdx = idx
        }
    }
    return (
        <div className={styles.root}>
            {
                gridElements.map((alphabet,idx)=><div key={idx} onClick={(e)=>{checkIfSame({alphabet,idx})}}>
                                            <Card alphabet = {alphabet} />
                                              </div>)
            }
        </div>
    )
}

export default Cards
