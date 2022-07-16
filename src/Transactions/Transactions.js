import './Transactions.css'
import TransactionRow from './TransactionRow';
import { getAllPayments } from '../data/DataFunctions';
import { useState } from 'react';

const Transactions = () => {

  const allPayments = getAllPayments();
  const displayPayments = allPayments.map((it, index) => <TransactionRow key={index} transactionRow={it} />); 

  //alternative solution
  // const allPayments = getAllPayments;
  // const [eachPayment, setPayments] = useState(allPayments);
  // const displayPayments = eachPayment.map((it, index) => <TransactionRow key={index} transactionRow={it} />); 

  return <table id="transactionTable" style={{background: "#ccc"}} className="transactionsTable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Date</th>
        <th>Country</th>
        <th>Currency</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* <TransactionRow id="1" date="2022-07-02" country="USA" currency="USD" amount="102" />
      <TransactionRow id="2" date="2022-07-04" country="Ireland" currency="EUR" amount="67" /> */}
        {displayPayments}

      {/* <tr><td>1</td><td>20222-07-04</td><td>USA</td><td>USD</td><td>102</td></tr>
      <tr><td>2</td><td>20222-07-04</td><td>Ireland</td><td>EUR</td><td>67</td></tr> */}
    </tbody>
  </table>
}

export default Transactions;