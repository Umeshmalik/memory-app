import { useContext, useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { exit } from '../constants/exit';
import { context } from '../App';
import { GridItems } from '../constants/GridConstants';

import { SimpleModalTypes } from '../types';


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

const SimpleModal: FC<SimpleModalTypes> = ({ issue, desc, variant, color }) => {
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

  const Body: FC = () => (
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
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Body />
      </Modal>
    </div>
  );
}

export default SimpleModal