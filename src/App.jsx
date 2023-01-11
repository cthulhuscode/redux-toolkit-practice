import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/slices/counter";
import "./App.css"

function App() {
  
  // Read/Select something from the store
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">       
      <div className="card">
        <h1>{counter}</h1>
        <div className="buttons">
          <button onClick={() => dispatch(increment())}>+</button>       
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
        </div>
      </div>     
    </div>
  )
}

export default App
