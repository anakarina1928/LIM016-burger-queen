import {React} from "react"
import './checkTable.css'

function TableHeader () {
    return(
        <thead>
            <tr>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
            </tr>
        </thead>
    )
}

export { TableHeader }