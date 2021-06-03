import React, {useContext} from 'react';
import {TransactionContext} from '../context/GlobalState'
/* eslint-disable */ // otherwise gives error  "expected an assignment or function call and instead saw an expression no-unused-expressions"

export const Balance = () => {

    const {transactions} = useContext(TransactionContext);
    console.log(typeof(transactions))
    // const amounts = transactions.map( (trans) => trans.amount  ); //if body of arrow function is a block, 
                                                                  //meaning that it is enclosed by { , } then in order to return anything you need
                                                                  // to use return keyword, if you are not using curly braces then no need to use return. In
                                                                  // this case return is implicit
    const amount = transactions.map( (trans) => {return trans.amount}  );
    // console.log(amount);

    let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    //reduce method reduces array in single value, execute each 
    //value of array from left to right.
    // 0 is initial value

    let sign = total>=0 ? '' : '-'
    
    return(
        <div>
            <h3 className='balance'>Your Balance</h3>
            <h3 className={ total>=0 ? 'total-plus' : 'total-minus' } > {sign}$ {Math.abs(total).toFixed(2)}</h3>
        </div>
    )
}