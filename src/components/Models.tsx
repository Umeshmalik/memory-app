import { FC } from 'react'
import { makeStyles } from '@material-ui/core';

import SimpleModal from './Model';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
})

const Models: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SimpleModal
        issue='Reset'
        desc='Are you sure to Reset Game?'
        variant='outlined'
        color='secondary'
      />
      <SimpleModal
        issue='Exit'
        desc='Are you sure to exit?'
        variant='contained'
        color='secondary'
      />
    </div>
  )
}

export default Models
