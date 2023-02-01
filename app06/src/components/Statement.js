import { useSelector } from 'react-redux';
import TxnRow from './TxnRow';
import StatementSummary from './StatementSummary';
import TxnForm from './TxnForm';

const Statement = (props) => {

    let txns = useSelector(globalState => globalState.txns);

    return (
        <div className='col-sm-10 p-2 mx-auto'>
            <h4>Statement </h4>

            <div className='row p-2 border-bottom border-danger fw-bold'>
                <div className='col-sm-2'>TxnId</div>
                <div className='col'>Header</div>
                <div className='col-sm-2'>Credit</div>
                <div className='col-sm-2'>Debit</div>
                <div className='col-sm-2'>Action</div>
            </div>
            <TxnForm />
            {
                txns && txns.length > 0 ?
                    txns.map(txn => (
                        txn.isEditing ?
                            <TxnForm key={txn.id} txn={txn} /> :
                            <TxnRow key={txn.id} txn={txn} />
                    )) :
                    <div className='row'>
                        <div className='col text-center'>
                            No Transactions Recorded. Start by adding one.
                        </div>
                    </div>
            }
            <StatementSummary />
        </div>
    );
}

export default Statement;