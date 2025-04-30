import { createContext, useState, useEffect, type FC } from 'react';

import './App.css';
import Cards from './components/Cards';
import Models from './components/Models';
import ScoreDisplay from './components/Score';
import { GridItems } from './constants/GridConstants';

import { GridConstantsTypes, ContextInterface, AllowedAlphabets } from "./types";

export const context = createContext<ContextInterface>({
  score: 0,
  solvedAlphabet: [],
  gridElements: GridItems,
  setSolvedAlphabet: () => null,
  setScore: () => null,
  setGridElements: () => null
});

const App: FC = () => {
  const [solvedAlphabet, setSolvedAlphabet] = useState<Array<AllowedAlphabets>>([]);
  const [gridElements, setGridElements ]  = useState<GridConstantsTypes>(GridItems);
  const [score, setScore] = useState<number>(0);

  useEffect(()=>{
    window.onbeforeunload = function() {
      return "Are you sure?";
    }
    window.onkeydown = function(event) {
      if (event.key === "F5") {
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
  };
  
  return (
    <context.Provider value={contextValues}>
      <div className="App">
        <header>
          <h2>Welcome to Memory Game</h2>
        </header>
        <main>
          <ScoreDisplay/>
          <Cards/>
          <Models/>
        </main>
      </div>
   </context.Provider>
  );
}

export default App;
