import React from "react";
import { TicketItems } from './ticketItems'

const Ticket = () => {
    return(
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
                    <TicketItems/>
                </table>
            </div>
            <div className="tableFooter">
                <div>TOTAL<br></br>S/. Esta caro</div>
            </div>
        </div>
    )
}

export { Ticket }