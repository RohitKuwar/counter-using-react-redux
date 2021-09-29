// our all reducer lies here only and then we will pass this into the store
import incDec from './incDecNum';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  incDec,
  // reducer2,
  // reducer3
});

export default rootReducer;