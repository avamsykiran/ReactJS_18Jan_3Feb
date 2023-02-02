import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createLoadTxnsActionThunk } from '../thunks/txnThunks';

import TxnRow from './TxnRow';
import StatementSummary from './StatementSummary';
import TxnForm from './TxnForm';

const Statement = (props) => {

    let txns = useSelector(globalState => globalState.txns);
    let errMsg = useSelector(globalState => globalState.errMsg);
    let shallWait = useSelector(globalState => globalState.shallWait);

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadTxnsActionThunk()), []);

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
                shallWait && (
                    <div className='alert alert-info p-2 fw-bold'>
                        Please wait while refershing data...
                    </div>
                )
            }

            {
                errMsg && (
                    <div className='alert alert-danger p-2 fw-bold'>
                        {errMsg}
                    </div>
                )
            }

            {
                txns && (
                    <Fragment>
                        {
                            txns.length > 0 ?
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
                    </Fragment>
                )
            }
        </div>
    );
}

export default Statement;