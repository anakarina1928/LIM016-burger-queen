import React from "react";

const TicketItems = ({item, key}) => {
    console.log('item: ', item);
    
    return(
        <tr key={key}>
            <th>{item.name}</th>
            <td>{item.cantidad}</td>
            <td>{item.total}</td>
        </tr>
    )
}

export { TicketItems }