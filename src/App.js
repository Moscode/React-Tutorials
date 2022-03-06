import './App.css';
import Counter from './components/Counter';
import { useState } from "react";
import User2Counter from './components/User2Counter';

function App() {
  const [count, setCount] = useState(0);
  const [icount, setIcount] = useState(0);

//For user 1
  const increaseValue = () => {
      setCount(count + 1)
  }
  const decreaseValue = () => {
      if (count === 0){
          alert("Value can't go below 0")
      }
      setCount(count - 1)
  }

//For user 2  
const increaseValue1 = () => {
    setIcount(icount + 1)
}
const decreaseValue1 = () => {
    if (icount === 0){
        alert("Value can't go below 0")
    }
    setIcount(icount - 1)
}

  return (
    <div className='App'>
      <Counter 
      user='1' 
      className="App1"
      increaseValue={()=>increaseValue}
      decreaseValue={()=>decreaseValue}
      count = {count}
      />
      <p>
        {
          count>icount ? 
          `User1 is > User2 ${count - icount}` 
          : 
          `User2 is > User1 ${icount - count}` 
        }
      </p>
      <User2Counter
      icount = {icount}
      user='2'
      className="App2"
      increaseValue={()=>increaseValue1}
      decreaseValue={()=>decreaseValue1}
      />
    </div>
  );
}

export default App;
