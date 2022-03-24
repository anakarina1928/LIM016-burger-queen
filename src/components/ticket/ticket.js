import React from "react";
import { TicketItems } from './ticketItems'

const Ticket = ({items}) => {
    return (
        <div className="ticketDiv">
            <div className="ticketTitle">
                <p className="ticketP">LISTA DE PEDIDO</p>
                <p className="ticketP">MESA # 5</p>
            </div>
            <div className="tableFixHead">
                <table>
                    <thead>
                        <tr>
                            <th className="productColumn">PRODUCTO</th>
                            <th>CANT.</th>
                            <th>PRECIO</th>
                        </tr>
                    </thead>
                    {items.order.map((item, index) => {
                        return (
                            <>
                                <TicketItems
                                    item={item}
                                    key={index}
                                />
                
                            </>
                        )
                    })
                    }
                </table>
            </div>
            <div className="tableFooter">

                 <div>TOTAL<br></br>{items.total}</div>
                   
              
            </div>
        </div>
    )
}

export { Ticket }

