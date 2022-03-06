import React from "react";
import { useState } from "react";

const Counter = (props) =>{
    let [count, setCount] = useState(0);

    const increaseValue = () => {
        setCount(count++)
    }
    const decreaseValue = () => {
        if (count === 0){
            alert("Value can't go below 0")
        }
        setCount(count--)
    }
    return(
        <div className ={props.className}>
            <h1>User {props.user}</h1>
            <button onClick={()=>increaseValue}>+</button>
            <p>Current Value: {count}</p>
            <button onClick={()=>decreaseValue}>-</button>
        </div>
    )
}

export default Counter;