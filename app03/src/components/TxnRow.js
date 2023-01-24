
const TxnRow = ({ txn, deleteById }) => (
    <div className='row p-1 border-bottom border-primary'>
        <div className='col-sm-2 text-end'>{txn.id}</div>
        <div className='col'>{txn.header}</div>
        <div className='col-sm-2 text-end'>{(txn.type === 'CREDIT') && txn.amount}</div>
        <div className='col-sm-2 text-end'>{(txn.type === 'DEBIT') && txn.amount} </div>
        <div className='col-sm-2'>
            <button type="button"
                className="btn btn-sm btn-danger"
                onClick={e => deleteById(txn.id)}>DELETE</button>
        </div>
    </div>
);

export default TxnRow;