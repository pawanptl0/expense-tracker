import Balance from "./components/Balance";
import IncomeExp from "./components/IncomeExp";
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalState from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-6 col-lg-4 mt-3">
          <GlobalState>   
            <Balance />
            <IncomeExp />
            <TransactionList />
            <AddTransaction />
          </GlobalState>
        </div>
      </div>
    </div>
  );
}

export default App;
