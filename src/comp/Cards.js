import { makeStyles } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { context } from '../App';
import Card from './Card'

const useStyles = makeStyles({
    root:{
        display: 'grid',
        gridTemplate: '5rem 5rem 5rem 5rem / 22% 22% 22% 22%',
        margin:'2% 10% 2% 10%',
        placeContent:'center'
    }
})
function Cards() {
    const styles = useStyles();
    const {setScore, gridElements, solvedAlphabet, setSolvedAlphabet, setChooseCard}  = useContext(context)
    let [choosenCards, setChoosenCards ]= useState('')
    let choosenIdx = -1
    const checkIfSame = ({alphabet, idx}) =>{
        if(solvedAlphabet.includes(alphabet.value))
            return
        setChooseCard(prev => !prev)
        if(!solvedAlphabet.includes(choosenCards) && choosenIdx !== idx  && choosenCards !== '' && choosenCards === alphabet.value){
            choosenIdx = -1
            setSolvedAlphabet([...solvedAlphabet,alphabet.value])
            setChooseCard('')
        }else if(choosenIdx === -1){
            setChoosenCards(alphabet.value)
            choosenIdx = idx
        }else{
            setChoosenCards('')
            if(!solvedAlphabet.includes(alphabet.value) && choosenIdx !== idx)
                setScore(prev => prev+1);
            choosenIdx = idx
        }
    }
    return (
        <div className={styles.root}>
            {
                gridElements.map((alphabet,idx)=><div key={idx} onClick={()=>{
                                                                if(idx !== choosenIdx)
                                                                    checkIfSame({alphabet,idx})
                                                                }}>
                                            <Card alphabet = {alphabet} />
                                              </div>
                                )
            }
        </div>
    )
}

export default Cards
