
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Store/Counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
       dispatch(counterActions.toggle());
       
  };

  const incrementHandler = () =>{
    dispatch(counterActions.increment())   
  }

   const increseHandler = () =>{
    dispatch(counterActions.increse(3))
   }
  
  const decrmentHandler = () =>{
    dispatch(counterActions.decrement()) 
  } 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    { show && <div className={classes.value}> {counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={ increseHandler}> Increment3</button>
        <button onClick={decrmentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
