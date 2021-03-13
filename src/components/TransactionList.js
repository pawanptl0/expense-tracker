import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleTransaction from './SingleTransaction';

const TransactionList = () => {
  const { transactions: data } = useContext(GlobalContext)
  console.log(data.length)
  return (
    <div className="mt-3">
      <h6>History</h6>
      <hr />
      <div className="container mt-2">
        {
          data.length === 0 ? <p className="text-danger">No New Transactions</p> : data.map(item => <SingleTransaction key={item.id} data={item} />)
        }
      </div>
    </div>
  )
}
export default TransactionList
