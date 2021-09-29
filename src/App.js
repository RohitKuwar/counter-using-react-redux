import React from 'react'
import styles from './App.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './actions/index'

function App() {
  const myState = useSelector(state => state.incDec)
  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
      <h1>React redux app</h1>
      <h2>{myState}</h2>
      <div>
        <button onClick={() => dispatch(incNum())}>Increment</button>
        <button onClick={() => dispatch(decNum())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
