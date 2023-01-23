
const TxnRow = ({ txn, deleteById }) => (
    <tr>
        <td className='text-end'>{txn.id}</td>
        <td>{txn.header}</td>
        <td className='text-end'> {(txn.type === 'CREDIT') && txn.amount} </td>
        <td className='text-end'> {(txn.type === 'DEBIT') && txn.amount} </td>
        <td>
            <button type="button"
                className="btn btn-sm btn-danger"
                onClick={e => deleteById(txn.id)}>DELETE</button>
        </td>
    </tr>
);

export default TxnRow;