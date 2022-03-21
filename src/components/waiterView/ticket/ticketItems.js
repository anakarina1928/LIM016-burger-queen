import React from "react";

const TicketItems = ({item, key}) => {
    console.log('item: ', item);
    // <tr>
    //     <th>{props.producto}</th>
    //     <td>{props.cantidad}</td>
    //     <td>{props.precio}</td>
    // </tr>
    return(
        <tr key={key}>
            <th>{item.name}</th>
            <td>{item.cantidad}</td>
            <td>{item.total}</td>
        </tr>
    )
}

export { TicketItems }