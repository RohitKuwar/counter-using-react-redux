import React from 'react'
import Footer from './components/footer/Footer'
import styles from './App.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './actions/index'

function App() {
  const myState = useSelector(state => state.incDec)
  const dispatch = useDispatch()
  return (
    <>
      <h1>React-redux App</h1>
      <div className={styles.container}>
        <h1 className={styles.counter}>{myState}</h1>
        <div>
          <button onClick={() => dispatch(incNum())}>Increment</button>
          <button onClick={() => dispatch(decNum())}>Decrement</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
