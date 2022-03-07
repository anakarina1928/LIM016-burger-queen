import {React} from "react"
import './checkTable.css'

function TableRowFood (props) {
    return(
        <tr>
            <th>{props.producto}</th>
            <th>{props.cantidad}</th>
            <th>{props.precio}</th>
        </tr>
    )
}

export { TableRowFood }