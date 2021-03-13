import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const IncomeExp = () => {
  const { transactions:data } = useContext(GlobalContext)
  const amounts = data.map(item => item.amount)
  const income = amounts.filter(item => item > 0).reduce( (acc, item) => acc += item,0).toFixed(2)
  const expense = amounts.filter(item => item < 0).reduce( (acc, item) => acc += item,0).toFixed(2)
  
  return (
    <div className="card-group card-shadow">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">INCOME</h5>
          <p className="card-text text-success"><i className="fas fa-rupee-sign"></i>{ income }</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">EXPENSE</h5>
          <p className="card-text text-danger"><i className="fas fa-rupee-sign"></i>{ expense } </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExp;