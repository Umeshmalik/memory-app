import { useContext, useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal as MaterialModal } from '@material-ui/core';

import { exit } from '../constants/exit';
import { context } from '../App';
import { GridItems } from '../constants/GridConstants';

import { ModalTypes } from '../types';


const ModalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal: FC<ModalTypes> = ({ issue, desc, variant, color }) => {
  const classes = useStyles();

  const contextData = useContext(context)
  const { setScore, setGridElements, setSolvedAlphabet } = contextData
  const [open, setOpen] = useState(false);

  const reset = () => {
    setScore(0)
    setGridElements(GridItems)
    setOpen(false)
    setSolvedAlphabet([])
  }
  const handleClose = () => {
    setOpen(false);
  };

  const body = () => (
    <div style={ModalStyle} className={classes.paper}>
      <h2>{issue}</h2>
      <p>{desc}</p>
      <Button onClick={() => issue === 'Exit' ? exit() : reset()}>{issue}</Button>
      <Button onClick={() => setOpen(false)}>No</Button>
    </div>
  );

  const openModel = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button variant={variant} color={color} onClick={openModel}>{issue}</Button>
      <MaterialModal
        open={open}
        onClose={handleClose}
      >
        {body()}
      </MaterialModal>
    </div>
  );
}

export default Modal