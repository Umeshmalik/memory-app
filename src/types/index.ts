export type AllowedAplhabets = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type GridOptions = {
    value: AllowedAplhabets,
    blank: '?'
}

export type GridConstantsTypes = Array<GridOptions>

export interface ContextInterface {
    score: number;
    solvedAlphabet: Array<AllowedAplhabets>;
    gridElements: GridConstantsTypes;
    choosenCard: boolean;
    setGridElements: Function;
    setSolvedAlphabet: Function;
    setChooseCard: Function;
    setScore: Function;
};

export interface SimpleModalTypes {
    issue: 'Exit' | 'Reset';
    desc: 'Are you sure to Reset Game?' | 'Are you sure to exit?';
    variant: 'contained' | 'outlined';
    color: 'secondary';
}