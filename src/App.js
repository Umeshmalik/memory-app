import { Container } from '@material-ui/core';
import { createContext, useState, useEffect } from 'react';
import './App.css';
import Cards from './comp/Cards';
import Models from './comp/Models';
import ScoreDisplay from './comp/Score';
import { shuffle } from './constants/GridConstants';

export const context = createContext();

function App() {
  const [solvedAlphabet, setSolvedAlphabet] = useState([]);
  const [gridElements, setGridElements ]  = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAlphabet, setSelectedAlphabet] = useState([]);
  const [choosenCard, setChooseCard] = useState(false);
  useEffect(()=>{
    setGridElements(shuffle())
    window.onbeforeunload = function() {
      return "Are you sure?";
    }
    window.onkeydown = function(event) {
      if (event.keyCode === 116) {
        window.location.reload();
      }
    }
  },[])
  
  return (
    <context.Provider value={{score, setScore, gridElements, setGridElements, solvedAlphabet, setSolvedAlphabet, selectedAlphabet, setSelectedAlphabet, choosenCard, setChooseCard}}>
      <Container className="App">
        <header>
          <h2>Welcome to Memory Game</h2>
        </header>
        <ScoreDisplay/>
        <Cards/>
        <Models/>
      </Container>
   </context.Provider>
  );
}

export default App;
