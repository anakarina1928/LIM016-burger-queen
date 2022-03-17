import {React} from "react"
import './checkTable.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

function TableRowFood (props) {
    return(
        <tr>
            <th className="productColumn">
                {props.producto}
                <input type="text" />
            </th>
            <td>{props.cantidad}</td>
            <td>{props.precio}</td>
            <td>
                <FontAwesomeIcon onClick={props.close} icon={faTrashCan}></FontAwesomeIcon>
            </td>
        </tr>
    )
}

export { TableRowFood }