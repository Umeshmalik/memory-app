import { GridConstantsTypes } from "../types";


export const GridItems = ((): GridConstantsTypes => {
  const gridConstants: GridConstantsTypes = [
    { value: 'A', blank: '?' },
    { value: 'B', blank: '?' },
    { value: 'C', blank: '?' },
    { value: 'D', blank: '?' },
    { value: 'E', blank: '?' },
    { value: 'F', blank: '?' },
    { value: 'G', blank: '?' },
    { value: 'H', blank: '?' },
    { value: 'A', blank: '?' },
    { value: 'B', blank: '?' },
    { value: 'C', blank: '?' },
    { value: 'D', blank: '?' },
    { value: 'E', blank: '?' },
    { value: 'F', blank: '?' },
    { value: 'G', blank: '?' },
    { value: 'H', blank: '?' }
  ]
  let currentIndex: number = gridConstants.length, randomIndex: number;

  while (currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [gridConstants[currentIndex], gridConstants[randomIndex]] = [gridConstants[randomIndex], gridConstants[currentIndex]];
  }
  return gridConstants;
})();