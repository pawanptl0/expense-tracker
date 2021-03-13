import React,{ useReducer } from 'react';

const initialState = {
  transactions: []
}

const MyReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_TRANSACTION':
      return {
        ...state, transactions: [action.payload, ...state.transactions]
      }

      case 'DELETE_TRANSACTION':
      return {
        ...state, transactions: state.transactions.filter( item => item.id !== action.payload)
      }

    default: 
      return state;
  }
}

export const GlobalContext = React.createContext(initialState)

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(MyReducer, initialState)

  const addAction = (obj) =>{
    dispatch({
      type:'ADD_TRANSACTION',
      payload: obj
    })
  }
  
  const deleteAction = (id) =>{
    console.log(id);
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={ { transactions: state.transactions, deleteAction, addAction } }>
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalState;