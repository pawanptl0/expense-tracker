import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions:data } = useContext(GlobalContext)
  const amounts = data.map(item => item.amount)
  const total = amounts.reduce( (acc,item) => acc += item, 0).toFixed(2)
  return (
    <div>
      <div className="text-center">
        <h5>Expense Tracker</h5>
      </div><br />
      <h6>Balance</h6>
      <h4><i className="fas fa-rupee-sign"></i>{ total }</h4>
    </div>
  );
};

export default Balance;