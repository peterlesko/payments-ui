import './Transactions.css'
import TransactionRow from './TransactionRow';

const Transactions = () => {

  return <table id="transactionTable" style={{background: "#ccc"}} className="transactionsTable">
    <thead>
      <tr><th>Id</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
    </thead>
    <tbody>
      <TransactionRow id="1" date="2022-07-02" country="USA" currency="USD" amount="102" />
      <TransactionRow id="2" date="2022-07-04" country="Ireland" currency="EUR" amount="67" />
      {/* <tr><td>1</td><td>20222-07-04</td><td>USA</td><td>USD</td><td>102</td></tr>
      <tr><td>2</td><td>20222-07-04</td><td>Ireland</td><td>EUR</td><td>67</td></tr> */}
    </tbody>
  </table>
}

export default Transactions;
