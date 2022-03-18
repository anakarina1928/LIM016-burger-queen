import { React } from "react"
import './checkTable.css'

function TableFooter ({sumProduct}) {
    return(
        // <tr>
        //     <td></td>
        //     <td></td>
        //     <td></td>
        //     <td>TOTAL</td>
        // </tr>
        <div className="tableFooter">
            <div>TOTAL</div>
            <div>S/. {sumProduct}</div>
        </div>
    )
}

export { TableFooter }