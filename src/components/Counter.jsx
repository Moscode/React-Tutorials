import React from "react";

const Counter = (props) =>{
    return(
        <div className ={props.className}>
            <h1>User {props.user}</h1>
            <button onClick={props.increaseValue}>+</button>
            <p>Current Value: {props.count}</p>
            <button onClick={props.decreaseValue}>-</button>
        </div>
    )
}

export default Counter;