const initialState = 0;

const incDec = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      switch(state){
        case 0:
          return 0;
        default:
          return state - 1;
      };
    default:
      return state;
  }
};

export default incDec;