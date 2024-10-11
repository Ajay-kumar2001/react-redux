import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseAppDispatch, useAppSelector } from './store/hooks/customHooks';
import { increment,decrement } from './store/slices/conterSlice';
import Todo from './components/todo';
function App() {
  const dispatch=UseAppDispatch()

  const count =useAppSelector((state)=>state.counter)
  return (
    <div className="App">
       
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
       <button onClick={()=>dispatch(decrement())}>decrement</button>
       <Todo/>
    </div>
  );
}

export default App;
