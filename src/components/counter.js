import React, {useState} from "react";
import "../styles/counter.css"


function Counter() {
  const [count, setCount] = useState(0);

  const incrementButton = () => {
    setCount(count + 1)
  }
  const decrementButton = () => {
    setCount(count - 1)
    if (count === 0)
      setCount (0)
  }
  const resetButton = () => {
    setCount(0)
  }
 
  return (
    <div className="cont">
      <div className="card">
        <div className="card-body">
          <h1> Counter App</h1>
          <div className="s-cont">
            <h2> {count}</h2>
            <button onClick = {incrementButton}className="btn btn-primary"> increment</button>
            <button onClick = {decrementButton}className="btn btn-danger"> decrement</button>
            <button onClick={resetButton} className=" btn btn-reset"> reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
