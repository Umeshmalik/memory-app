import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { context } from "../App";
import { GridOptions } from "../types";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2196F3',
    width:'80%',
    height:'90%',
    marginBottom:'20%',
    border: '1px solid rgba(0, 0, 0, 0.8)'
  }
});

const SimpleCard = ({alphabet}: {alphabet: GridOptions})  => {
  const classes = useStyles();
  const {solvedAlphabet} = useContext(context)
  const [showCard, setShowCard] = useState(false);
  
  const makeCardVisible = ()=>{
    setShowCard(!showCard)
    setTimeout(()=>setShowCard(false),1000)
  }
  return (
    <Card className={classes.root}>
      {solvedAlphabet.includes(alphabet.value) && <CardContent style={{display:'none'}}>{alphabet.value}</CardContent>}
      {!showCard && !solvedAlphabet.includes(alphabet.value) && <CardContent style={{display:`${showCard?'none':'false'}`}} onClick={()=>makeCardVisible()}>{alphabet.blank}</CardContent>}
      {showCard && <CardContent>{alphabet.value}</CardContent>}
    </Card>
  );
}

export default SimpleCard
