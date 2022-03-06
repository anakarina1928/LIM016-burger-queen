import {React} from "react"

function CheckTable () {
    return(
        <div>
            <div>
                <p>Lista de pedido</p>
                <div>
                    <p>Mesa #</p>
                    <input type='text'></input>
                </div>
            </div>
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>S./</th>
                </tr>
            </table>
        </div>
    )
}

export default CheckTable