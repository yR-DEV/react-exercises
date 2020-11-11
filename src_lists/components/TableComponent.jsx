import React from 'react';

const TableComponent = (props) => {

    return (
        <table>
            <thead fontWeight="bold;">
                <tr>
                {props.titles.map((title, i) => {
                    return (
                        <th key={i}>{title.toUpperCase()}</th>
                    )
                })}
                </tr>
            </thead>
            {props.products.map(product => {
                return (
                    <tr key={product.id.toString()}>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>{product.price}</td>
                    </tr>
                )})
            }
        </table>
    )
};

export default TableComponent;