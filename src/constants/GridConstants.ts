import { AllowedAlphabets, GridConstantsTypes } from "../types";


export const GridItems = ((): GridConstantsTypes => {
  const gridConstants: GridConstantsTypes = Array.from({ length: 16 }, (_, i: number) => ({ value: String.fromCharCode((i % 8) + 65) as AllowedAlphabets, blank: '?' }))

  let currentIndex: number = gridConstants.length, randomIndex: number;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [gridConstants[currentIndex], gridConstants[randomIndex]] = [gridConstants[randomIndex], gridConstants[currentIndex]];
  }
  return gridConstants;
})();