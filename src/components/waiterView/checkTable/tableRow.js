import {React} from "react"
import './checkTable.css'

function TableRowFood (props) {
    return(
        <tr>
            <th>{props.producto}</th>
            <td>{props.cantidad}</td>
            <td>{props.precio}</td>
        </tr>
    )
}

export { TableRowFood }