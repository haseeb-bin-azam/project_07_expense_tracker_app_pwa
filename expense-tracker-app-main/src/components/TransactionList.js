import React, { useContext } from 'react';
import {TransactionContext} from '../context/GlobalState'
import '../App.css'

export const TransactionList = () => {
    let  {transactions}  = useContext(TransactionContext);
    console.log(transactions);

    let {deleteTransaction} = useContext(TransactionContext);

    // let sign = '';

    return (
        <div>
            <h2 className='history'>History <hr /></h2>

            <ul className='add-trans-list'>
                {transactions.map((trans, ind) => {
                    return (
                        <li className={trans.amount>0 ? 'its-income' : 'its-expense'} key={ind}>
                            <span>{trans.desc}</span>
                            <span>${Math.abs(trans.amount)}</span>
                            <button onClick={()=>{deleteTransaction(trans.id)}} className="delete-btn">x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}