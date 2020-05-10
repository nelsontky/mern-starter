import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../actions/counterActions";

export default function Root() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrease Counter
      </button>
    </div>
  );
}
