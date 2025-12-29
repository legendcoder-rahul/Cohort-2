import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByAmount  } from "./feature/counterSlice";

const ReduxToolkit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState();
  return (
    <div>
      <h1>{count}</h1>

      <button
        className="btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increament
      </button>

      <button
        className="btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decreament
      </button>

      <input
        className="btn"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => dispatch(incrementByAmount(Number(num)))}
      >
        Increase by Amount
      </button>
    </div>
  );
};

export default ReduxToolkit;
