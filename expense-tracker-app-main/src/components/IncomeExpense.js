import React, { useContext } from 'react';
import {TransactionContext} from '../context/GlobalState';

import '../App.css';

export const IncomeExpense = () => {

    let {transactions} = useContext(TransactionContext);
    console.log(transactions);

    
    function getIncome(){
        let income = 0;
        for( var i=0; i<transactions.length; ++i){
            if( transactions[i].amount > 0 )
            income = income + transactions[i].amount;
        }
        return income;
    }
    
    const getExpense = () =>{
        let expense = 0;
        for( var i=0; i<transactions.length; ++i){
            if( transactions[i].amount < 0 )
                expense += transactions[i].amount;
        }
        return expense;
    }

    // console.log(income);
    // console.log(expense);


    return(
        <div className="inc-exp">
            <h3 className='income'>Income <br/> <span className='get-income'>${getIncome()}</span></h3>
            <h3 className='expense'>Expense <br/> <span className='get-expense'> ${Math.abs(getExpense())}</span></h3>
        </div>
    );
}