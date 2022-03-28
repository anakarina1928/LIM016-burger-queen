import { React } from 'react'
import './checkTable.css'

function TableHeader () {
  return (
        <thead>
            <tr>
                <th className="bin"></th>
                <th className="productColumn">PRODUCTO</th>
                <th className="quantityPriceColumn">CANT.</th>
                <th className="quantityPriceColumn">PRECIO</th>
                <th className="bin"></th>
            </tr>
        </thead>
  )
}

export { TableHeader }
