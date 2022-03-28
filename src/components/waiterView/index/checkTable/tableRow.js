import { React, useEffect, useState } from "react"
import './checkTable.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

function TableRowFood(props) {

    const [renderInput, setRenderInput] = useState(false)
    const [commentInput, setCommentInput] = useState('');

    const onSetComment = (event) => {
        const comment = event.target.value;
        updateCommentOnProduct(comment);
    }
  
    const updateCommentOnProduct = (comment) => {
        setCommentInput(comment);
        props.setCommentOnProduct(comment, props.index);
    }
   
    useEffect(() => {
        if (renderInput) {
            updateCommentOnProduct('');
        }
    }, [renderInput])

    const onTap = () => {
        setRenderInput(!renderInput)
    }



    return (
        <tr key={props.key}>
            <td onClick={onTap} >
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            </td>
            <td className="productColumn">
                {props.producto}
                <br></br>
                {renderInput === true && <input type="text" defaultValue={commentInput} onBlur={onSetComment} />}
            </td>
            <td>{props.cantidad}</td>
            <td>S/. {props.precio}</td>
            <td>
                <FontAwesomeIcon onClick={props.deleteProduct} icon={faTrashCan}></FontAwesomeIcon>
            </td>
        </tr>
    )
}

export { TableRowFood }