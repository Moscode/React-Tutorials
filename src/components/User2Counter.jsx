import React from 'react'

const User2Counter = (props) => {
  return (
    <div className ={props.className}>
    <h1>User {props.user}</h1>
    <button onClick={props.increaseValue1}>+</button>
    <p>Current Value: {props.icount}</p>
    <button onClick={props.decreaseValue1}>-</button>
    </div>
  )
}

export default User2Counter