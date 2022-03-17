import React from "react";
import { TicketItems } from './ticketItems'

const Ticket = () => {
    // <div className="ticketDiv">
    //     <div className="ticketTitle">
    //         <p className="ticketP">LISTA DE PEDIDO</p>
    //         <p className="ticketP">MESA # {props.tableNumber}</p>
    //     </div>
    //     <table>
    //         <thead>
    //             <th>PRODUCTO</th>
    //             <th>CANT.</th>
    //             <th>PRECIO</th>
    //         </thead>
    //         <tbody>
    //             <TicketItems/>
    //         </tbody>
    //         <tfoot>
    //             <tr>
    //                 <th></th>
    //                 <th></th>
    //                 <th>TOTAL</th>
    //             </tr>
    //             <tr>
    //                 <th></th>
    //                 <th></th>
    //                 <th>
    //                     <span>S./ Preciazo</span>
    //                 </th>
    //             </tr>
    //         </tfoot>
    //     </table>
    // </div>
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
                <tbody>
                    <TicketItems/>
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