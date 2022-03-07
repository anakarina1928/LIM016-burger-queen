import {React} from "react"
import './checkTable.css'
import { TableHeader } from './tableHeader'
import { TableFooter } from './tableFooter'
import { TablePrice } from './tablePrice'
import { TableRowFood } from './tableRow'

const orders = [
    {producto: "Hamburguesa", cantidad: 3, precio: 15.00},
    {producto: "Helado", cantidad: 1, precio: 8.00},
    {producto: "Agua", cantidad: 2, precio: 5.00},
    {producto: "Agua", cantidad: 2, precio: 5.00}
]

function CheckTable () {
    return(
        <div className="checkTableDiv">
            <div className="checkTableTitle">
                <p className="checkTableP">LISTA DE PEDIDO</p>
                <div className="checkTableInnerDiv">
                    <p className="checkTableP">MESA #</p>
                    <input className="checkTableInp" type='number'></input>
                </div>
            </div>
            <table>
                <TableHeader/>
                {orders.map(order => (
                <TableRowFood
                    producto={order.producto}
                    cantidad={order.cantidad}
                    precio={order.precio}
                />
                ))}
                <TableFooter/>
                <TablePrice/>
            </table>
        </div>
    )
}

export default CheckTable