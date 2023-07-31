import {useSelector,useDispatch}from 'react-redux';
import { counterActions } from '../Store';
import classes from './Counter.module.css';

const Counter = () => {
 const dispatch =  useDispatch();
 const counter = useSelector(state => state.counter.counter);
 const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () =>{
      dispatch(counterActions.increment());
  }

  const IncremntBy2 = () =>{
    dispatch(counterActions.increase(10))
  }

  const decrmentHandler = () =>{
     dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {  show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={IncremntBy2} >IncremntBy2</button>
        <button onClick={decrmentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
