
import React, { createContext, useReducer } from 'react';
import { TransactionReducer } from '../context/TransReducer';

const initialTransactions = {
    transactions: []
}
console.log(initialTransactions);

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
    // console.log({children});

    function addTransaction(trans) {
        dispatch({
            type: 'ADD_TRANSACTION',
            // payload: { id : trans.id, desc: trans.desc, amount: trans.amount }
            payload: trans
        });
    }

    function deleteTransaction(id){
        // console.log('child is called');
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            addTransaction,  //addTransaction: addTransaction
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}