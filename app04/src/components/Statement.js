import { useState,useEffect } from 'react';
import TxnRow from './TxnRow';
import StatementSummary from './StatementSummary';
import TxnForm from './TxnForm';

const totalOf = (txns, type) => {
    let total = 0;
    if (txns && txns.length > 0) {
        let filteredTxns = txns.filter(t => t.type === type);
        if (filteredTxns && filteredTxns.length > 0) {
            total = filteredTxns.map(t => t.amount).reduce((a1, a2) => a1 + a2);
        }
    }
    return total;
};

const Statement = (props) => {

    let [txns, setTxns] = useState([
        { id: 1, header: 'Salary', type: 'CREDIT', amount: 45000 },
        { id: 2, header: 'Rent', type: 'DEBIT', amount: 5000 },
        { id: 3, header: 'Fuel', type: 'DEBIT', amount: 1000 },
        { id: 4, header: 'Mobile Recharge', type: 'DEBIT', amount: 800 }
    ]);

    const add = txn => {
        let maxId = txns.length === 0 ? 0 : txns.map(t => t.id).reduce((id1, id2) => Math.max(id1, id2));
        txn.id = maxId + 1;
        setTxns([...txns, txn]);
    }

    const update = txn => {
        setTxns(txns.map(t => t.id != txn.id ? t : { ...txn, isEditing: undefined }));
    }

    const markEditable = id => {
        setTxns(txns.map(t => t.id != id ? t : { ...t, isEditing: true }));
    }

    const unmarkEditable = id => {
        setTxns(txns.map(t => t.id != id ? t : { ...t, isEditing: undefined }));
    }

    const deleteById = id => {
        setTxns(txns.filter(t => t.id != id));
    }

    let [totalCredit,setTotalCredit] = useState(totalOf(txns, "CREDIT"));
    let [totalDebit,setTotalDebit] = useState(totalOf(txns, "DEBIT"));
    let [balance,setBalance]= useState(totalCredit - totalDebit);

    useEffect(() => {
        setTotalCredit(totalOf(txns, "CREDIT"));
        setTotalDebit(totalOf(txns, "DEBIT"));
    },[txns]);

    useEffect(()=>{
        setBalance(totalCredit - totalDebit);
    },[totalCredit,totalDebit]);

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
            <TxnForm save={add} />
            {
                txns && txns.length > 0 ?
                    txns.map(txn => (
                        txn.isEditing ?
                            <TxnForm key={txn.id} txn={txn} save={update} cancel={unmarkEditable} /> :
                            <TxnRow key={txn.id} txn={txn} deleteById={deleteById} edit={markEditable} />
                    )) :
                    <div className='row'>
                        <div className='col text-center'>
                            No Transactions Recorded. Start by adding one.
                        </div>
                    </div>
            }
            <StatementSummary tc={totalCredit} td={totalDebit} bal={balance} />
        </div>
    );
}

export default Statement;