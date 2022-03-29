import { React } from 'react';
import './checkTable.css';

function TableFooter ({ sumProduct }) {
  return (

        <div className="tableFooter">
            <div className="margin-total">TOTAL<br></br>S/. {sumProduct}</div>
        </div>
  );
}

export { TableFooter };
