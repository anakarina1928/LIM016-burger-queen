import {React} from "react"
import './checkTable.css'

function TablePrice ({sumProduct}) {
    return(
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>
                <span>S./</span>
                <span>{sumProduct}</span>
            </th>
        </tr>
    )
}

export { TablePrice }