import { useDispatch, useSelector } from "react-redux";
import { calculatorActionType } from "../store/calculator/CalculatorSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculatorActionType.add(5));
  };

  const subtractHandler = () => {
    dispatch(calculatorActionType.subtract(10));
  };

  const divideHandler = () => {
    dispatch(calculatorActionType.divide(4));
  };

  const myltiplyHandler = () => {
    dispatch(calculatorActionType.multiply(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={myltiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Counter;
