import {React, useState} from "react"
import './checkTable.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

function TableRowFood (props) {

    const [renderInput, setRenderInput] = useState(false)

    const onTap = () => {
        console.log("pasa por onTap")
        setRenderInput(!renderInput)
    }

    return(
        <tr>
            <td onClick={onTap} >
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            </td>
            <td className="productColumn">
                {props.producto}
                <br></br>
                {renderInput === true && <input type="text" />}
            </td>
            <td>{props.cantidad}</td>
            <td>{props.precio}</td>
            <td>
                <FontAwesomeIcon onClick={props.close} icon={faTrashCan}></FontAwesomeIcon>
            </td>
        </tr>
    )
}

export { TableRowFood }