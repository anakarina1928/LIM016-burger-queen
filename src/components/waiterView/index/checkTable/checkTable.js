import { React } from 'react';
import './checkTable.css';
import { TableHeader } from './tableHeader';
import { TableFooter } from './tableFooter';
import { TableRowFood } from './tableRow';

function CheckTable (props) {
  return (
        <div className="checkTableDiv">
            <div className="table-flex">
            <div className="checkTableTitle">
                <p className="checkTableP">LISTA DE PEDIDO</p>
                <div className="checkTableInnerDiv">
                    <p className="checkTableP">MESA #</p>
                    <input className="checkTableInp" type='number' value={props.tableNumber} onChange={(event) => props.setTableNumber(event.target.value)}></input>
                </div>
            </div>
            <div className="tableFixHead">
                <table>
                    <TableHeader/>
                    <tbody>
                        {props.productSelect.map((order, index) => (
                        <TableRowFood
                            key={index}
                            index={index}
                            producto={order.name}
                            cantidad={order.cantidad}
                            precio={order.total}
                            onTap={props.onTap}
                            renderInput={props.renderInput}
                            setCommentOnProduct={props.setCommentOnProduct}
                            deleteProduct={()=>props.deleteProduct(index)}
                        />
                        ))}
                    </tbody>
                </table>
            </div>
            <TableFooter
                sumProduct={props.sumProduct}
            />
            </div>
        </div>
  );
}

export { CheckTable };
