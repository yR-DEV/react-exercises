import React, { Component } from 'react';

// export default class AddShoppingListItem extends Component {
//     constructor(props) {
//         super();

//     }
// }

const AddShoppingListItem = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="item">Item: </label>
                <input type="text" name="item" id="item"></input>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default AddShoppingListItem;

