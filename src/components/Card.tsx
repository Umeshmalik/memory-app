import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MaterialCard, CardContent } from "@material-ui/core";

import { context } from "../App";
import { GridOptions } from "../types";

const useStyles = makeStyles({
  root: {
    width: '80%',
    height: '90%',
    marginBottom: '20%',
    border: '1px solid rgba(0, 0, 0, 0.8)',
  }
});

const Card = ({ alphabet, idx, checkIfSame, visible, disable }: { alphabet: GridOptions, idx: number, checkIfSame: Function, visible: boolean, disable: boolean }) => {
  const classes = useStyles();
  const { solvedAlphabet } = useContext(context);
  const selected = visible;
  visible = visible || solvedAlphabet.includes(alphabet.value);
  disable = disable || solvedAlphabet.includes(alphabet.value);

  return (
    <MaterialCard className={classes.root} style={{ cursor: (disable ? "not-allowed" : "pointer"), backgroundColor: (selected ? "#FFD700" : visible ? '#32de84' : '#2196F3') }} onClick={() => !disable && checkIfSame({ alphabet, idx })}>
      {visible ? <CardContent>{alphabet.value}</CardContent> : <CardContent>{alphabet.blank}</CardContent>}
    </MaterialCard>
  );
}

export default Card;
