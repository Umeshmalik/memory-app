import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { exit } from '../constants/exit';
import { context } from '../App';
import { shuffle } from '../constants/GridConstants';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({issue, desc, variant, color}) {
  const classes = useStyles();  

  const contextData = useContext(context)
  const { setScore, setGridElements, setSolvedAlphabet} = contextData
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const reset = () =>{
    setScore(0)
    setGridElements(shuffle())
    setOpen(false)
    setSolvedAlphabet([])
  }
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>{issue}</h2>
      <p>{desc}</p>
      <Button onClick={()=>issue === 'Exit'?exit():reset()}>{issue}</Button>
      <Button onClick={()=>setOpen(false)}>No</Button>
    </div>
  );

  const openModel = () =>{
    setOpen(true)
  }

  return (
    <div>
        <Button variant={variant} color={color} onClick={()=>openModel()}>{issue}</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal