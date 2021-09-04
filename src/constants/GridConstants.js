export function shuffle() {
    var gridConstants = [{value:'A',blank:'?'},
                          {value:'B',blank:'?'},
                          {value:'C',blank:'?'},
                          {value:'D',blank:'?'},
                          {value:'E',blank:'?'},
                          {value:'F',blank:'?'},
                          {value:'G',blank:'?'},
                          {value:'H',blank:'?'},
                          {value:'A',blank:'?'},
                          {value:'B',blank:'?'},
                          {value:'C',blank:'?'},
                          {value:'D',blank:'?'},
                          {value:'E',blank:'?'},
                          {value:'F',blank:'?'},
                          {value:'G',blank:'?'},
                          {value:'H',blank:'?'}
                        ]
    var currentIndex = gridConstants.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [gridConstants[currentIndex], gridConstants[randomIndex]] = [
        gridConstants[randomIndex], gridConstants[currentIndex]];
    }
    return gridConstants;
}