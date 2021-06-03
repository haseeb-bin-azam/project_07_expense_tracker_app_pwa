import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './context/GlobalState';
import { TransactionContext } from './context/GlobalState';
import { useContext } from 'react';
// import {configureNotification} from './Services/firebase-services.js';

import './App.css'

function App() {
  let transactions = useContext(TransactionContext);
  // console.log(transactions);



  window.addEventListener('load', (event) => {
    // configureNotification();
  });

  return (
    <div className='container'>
      <TransactionProvider >
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </TransactionProvider>
    </div>
  );
}

export default App;
