import React, {useState} from "react";


function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="cont">
      <div className="card">
        <div className="card-body">
          <h1> Counter App</h1>
          <div className="s-cont">
            <h2> COUNT</h2>
            <button className="btn btn-primary"> increment</button>
            <button className="btn btn-danger"> decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
