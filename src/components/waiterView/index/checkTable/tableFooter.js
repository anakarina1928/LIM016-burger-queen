import { React } from "react"
import './checkTable.css'

function TableFooter ({sumProduct}) {
    return(
        
        <div className="tableFooter">
            <div>TOTAL<br></br>S/. {sumProduct}</div>
        </div>
    )
}

export { TableFooter }