import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const { transactions, addAction } = useContext(GlobalContext)
  const len = transactions.length + 1;
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')

  const handleTitleChange = (e) =>{
    setTitle(e.currentTarget.value)
  }

  const handleAmountChange = (e) =>{
    setAmount(e.currentTarget.value)
  }

  const sendData = (e) =>{
    e.preventDefault()
    addAction({ id: len, title, amount:Number(amount) })
  }

  return (
    <div>
      <h6>Add Transaction</h6>
      <hr />
      <form onSubmit={ sendData }>
        <div className="form-group">
          <label htmlFor="title">Text:</label>
          <input type="text" className="form-control" placeholder="Enter Text" name="title" 
          value={ title } onChange={ handleTitleChange }/>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" className="form-control" name="amount" 
          value={ amount } onChange={ handleAmountChange }/>
        </div>

        <div className="form-group">
        <input type="text" className="form-control-plaintext" 
        placeholder="Use Negative sign(-) for Expense" />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;