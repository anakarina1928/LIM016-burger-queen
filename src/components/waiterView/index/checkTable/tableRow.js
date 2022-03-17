import {React} from "react"
import './checkTable.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

function TableRowFood (props) {
    return(
        <tr>
            <td className="productColumn">
                {props.producto}
                <input type="text" />
            </td>
            <td>{props.cantidad}</td>
            <td>{props.precio}</td>
            <td>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </td>
        </tr>
    )
}

export { TableRowFood }