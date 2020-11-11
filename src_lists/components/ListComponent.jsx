import React from 'react';

const ListComponent = (props) => {
    // const baseTwo= props.list.map(num => {
    //      return <li>
    //         {Math.pow(num, 2)}
    //     </li>
    // });

    return (
        <ul>
            { props.list.map(num => {
            return (
                <li>{Math.pow(num, 2)}</li> 
            )})}
        </ul>
    )
}

export default ListComponent;