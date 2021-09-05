import React, { useContext } from 'react'
import {  makeStyles } from '@material-ui/core';
import SimpleModal from './Model';
import { context } from '../App';


const useStyles = makeStyles({
    root:{
      display:'flex',
      justifyContent:'space-evenly'
    },
    command:{
      paddingBottom:'3.5%'
    }
  })

function Models() {
  const {choosenCard} = useContext(context)
  const styles = useStyles();

    return (
      <div>
        <div className = {styles.command}>
          {choosenCard ? `Please choose Second Card`:`Please Choose First Card`}
        </div>
        <div className = {styles.root}>
          <SimpleModal
            issue = 'Reset'
            desc = 'Are you sure to Reset Game?'
            variant = 'outlined'
            color = 'secondary'
            />
          <SimpleModal
            issue = 'Exit'
            desc = 'Are you sure to exit?'
            variant = 'contained'
            color = 'secondary'
            />
        </div>
      </div>
    )
}

export default Models
