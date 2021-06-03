import React, { useContext, useState } from 'react';
import {TransactionContext} from '../context/GlobalState';
import '../App.css'

export const AddTransaction = () => {

    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    let {addTransaction} = useContext(TransactionContext)

    const handlePageReload = (event)=>{
        event.preventDefault()
        // console.log(newDesc, newAmount)
        
        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            desc: newDesc,
            amount: Number(newAmount) 
        })

        event.target.reset();
    }

    return (
        <div>
            <h3 className='history'>Add New Transaction <hr /></h3>

            <form className='add-trans-form' onSubmit={handlePageReload}>
                <label>
                    Enter Description <br />
                    <input type="text" placeholder=' Please Enter Description' onChange={(event)=>{setDesc(event.target.value)}} required />
                </label>

                <br />

                <label>
                    Enter Amount <br />
                    <input type="number" placeholder=' (please enter - sign with expense)' onChange={(event)=>{setAmount(event.target.value)}} required />
                </label>

                <br />

                <input type='submit' value="Add Transaction" />
                {/* <input type='submit' value="add transaction" onClick={(e)=>{e.preventDefault()}} /> */}
            </form>
        </div>
    )
}