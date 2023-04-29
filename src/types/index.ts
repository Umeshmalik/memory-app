export type AllowedAlphabets = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type GridOptions = {
    value: AllowedAlphabets,
    blank: '?'
}

export type GridConstantsTypes = Array<GridOptions>

export interface ContextInterface {
    score: number;
    solvedAlphabet: Array<AllowedAlphabets>;
    gridElements: GridConstantsTypes;
    setGridElements: Function;
    setSolvedAlphabet: Function;
    setScore: Function;
};

export interface ModalTypes {
    issue: 'Exit' | 'Reset';
    desc: 'Are you sure to Reset Game?' | 'Are you sure to exit?';
    variant: 'contained' | 'outlined';
    color: 'secondary';
}