import React from 'react';

const ShoppingList = (props) => {


    return (
        <div>
            <h3>WHAT TO BUY AT GE ON NON IRONMAN</h3>
            <ul>
                {props.list.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;