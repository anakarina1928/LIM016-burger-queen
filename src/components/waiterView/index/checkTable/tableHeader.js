import {React} from "react"
import './checkTable.css'

function TableHeader () {
    return(
        <thead>
            <tr>
                <th className="productColumn">PRODUCTO</th>
                <th>CANT.</th>
                <th>PRECIO</th>
                <th></th>
            </tr>
        </thead>
    )
}

export { TableHeader }