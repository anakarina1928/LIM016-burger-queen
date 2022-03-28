import React from "react";
import { TicketItems } from './ticketItems'

const Ticket = ({items}) => {
    return (
        <div className="ticketDiv">
            <div className="ticketTitle">
                <p className="ticketP">LISTA DE PEDIDO</p>
                <p className="ticketP"> MESA: N°{items.table}</p>
            </div>
            <div className="tableFixHead">
                <table>
                    <thead>
                        <tr>
                            <th className="productColumn productMargin">PRODUCTO</th>
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

                 <div className="margin-total">TOTAL<br></br> S/. {items.total}</div>
                   
              
            </div>
        </div>
    )
}

export { Ticket }

