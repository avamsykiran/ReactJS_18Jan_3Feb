import { createMarkTxnEditableAction } from '../state/txnReducer';
import { createDelTxnActionThunk } from '../thunks/txnThunks';
import { useDispatch } from 'react-redux';

const TxnRow = ({ txn }) => {

    const dispatch = useDispatch();
    const editAction = createMarkTxnEditableAction(txn.id);
    const deleteActionThunk = createDelTxnActionThunk(txn.id);
    
    return (
        <div className='row p-1 border-bottom border-primary'>
            <div className='col-sm-2 text-end'>{txn.id}</div>
            <div className='col'>{txn.header}</div>
            <div className='col-sm-2 text-end'>{(txn.type === 'CREDIT') && txn.amount}</div>
            <div className='col-sm-2 text-end'>{(txn.type === 'DEBIT') && txn.amount} </div>
            <div className='col-sm-2'>
                <button type="button"
                    className="btn btn-sm btn-secondary me-1"
                    onClick={e => dispatch(editAction)}>EDIT</button>
                <button type="button"
                    className="btn btn-sm btn-danger"
                    onClick={e => dispatch(deleteActionThunk)}>DELETE</button>
            </div>
        </div>
    );
}

export default TxnRow;