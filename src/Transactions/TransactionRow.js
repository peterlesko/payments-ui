const TransactionRow = (props) => {

  return <tr>
      <td>{props.transactionRow.id}</td>
      <td>{props.transactionRow.date}</td>
      <td>{props.transactionRow.country}</td>
      <td>{props.transactionRow.currency}</td>
      <td>{props.transactionRow.amount}</td>
    </tr>;

  //before challange-populating table 
  // return <tr>
  //     <td>{props.id}</td>
  //     <td>{props.date}</td>
  //     <td>{props.country}</td>
  //     <td>{props.currency}</td>
  //     <td>{props.amount}</td>
  //   </tr>;

}

export default TransactionRow;
