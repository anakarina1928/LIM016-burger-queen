import React from 'react';

const TicketItems = ({ item, key }) => {
  console.log('item: ', item);

  return (
        <tr key={key}>
            <th className="productColumn productMargin">{item.name}  <br/>{item.comentario}</th>
            <td>{item.cantidad}</td>
            <td>S/. {item.total}</td>
        </tr>

  );
};

export { TicketItems };
