import React from "react";
import { TicketItems } from './ticketItems'

const Ticket = ({items}) => {
    console.log("productos de la orden a mostrar: ", items);
    return(
        <div className="ticketDiv">
            <div className="ticketTitle">
                <p className="ticketP">LISTA DE PEDIDO</p>
                <p className="ticketP">MESA # 5</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>CANT.</th>
                        <th>PRECIO</th>
                    </tr>
                </thead>
                <tbody>{items.map((item, index) => {
                   return(
                   <>    
                    <TicketItems
                        item={item}
                        key={index}
                    />
                    </>
                )})
                }
                  
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>TOTAL</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <span>S./ Preciazo</span>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export { Ticket }

