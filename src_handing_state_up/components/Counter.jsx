import React from 'react';

const Counter = (props) => {

    return (
    <button onClick={() => props.handleClick(props.val)}>Add {props.val}</button>
    )
}

export default Counter;