import { createContext, useState, useEffect, FC } from 'react';
import { Container } from '@material-ui/core';

import './App.css';
import Cards from './comp/Cards';
import Models from './comp/Models';
import ScoreDisplay from './comp/Score';
import { GridItems } from './constants/GridConstants';

import { GridConstantsTypes, ContextInterface, AllowedAplhabets } from "./types";

export const context = createContext<ContextInterface>({
  score: 0,
  solvedAlphabet: [],
  gridElements: GridItems,
  choosenCard: false,
  setSolvedAlphabet: () => null,
  setChooseCard: () => null,
  setScore: () => null,
  setGridElements: () => null
});

const App: FC = () => {
  const [solvedAlphabet, setSolvedAlphabet] = useState<Array<AllowedAplhabets>>([]);
  const [gridElements, setGridElements ]  = useState<GridConstantsTypes>(GridItems);
  const [score, setScore] = useState<number>(0);
  const [selectedAlphabet, setSelectedAlphabet] = useState<Array<AllowedAplhabets>>([]);
  const [choosenCard, setChooseCard] = useState<boolean>(false);
  useEffect(()=>{
    window.onbeforeunload = function() {
      return "Are you sure?";
    }
    window.onkeydown = function(event) {
      if (event.keyCode === 116) {
        window.location.reload();
      }
    }
  },[])

  const contextValues = {
    score,
    setScore,
    gridElements,
    setGridElements,
    solvedAlphabet, 
    setSolvedAlphabet, 
    selectedAlphabet, 
    setSelectedAlphabet, 
    choosenCard, 
    setChooseCard
  };
  
  return (
    <context.Provider value={contextValues}>
      <div className="App">
        <header>
          <h2>Welcome to Memory Game</h2>
        </header>
        <ScoreDisplay/>
        <Cards/>
        <Models/>
      </div>
   </context.Provider>
  );
}

export default App;
