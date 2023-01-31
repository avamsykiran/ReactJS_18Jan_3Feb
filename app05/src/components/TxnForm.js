import { useState } from 'react';

const TxnForm = ({ txn, save, cancel }) => {

    let [id, setId] = useState(txn ? txn.id : 0);
    let [header, setHeader] = useState(txn ? txn.header : '');
    let [type, setType] = useState(txn ? txn.type : 'CREDIT');
    let [amount, setAmount] = useState(txn ? txn.amount : 0);
    let isEditing = txn ? txn.isEditing:undefined;

    const formSubmitted = event => {
        event.preventDefault();
        save({ id, header, type, amount });
        setId(0);
        setHeader('');
        setType('CREDIT');
        setAmount(0);
    }

    return (
        <form className='row p-1 border-bottom border-primary' onSubmit={formSubmitted}>
            <div className='col-sm-2 text-end'>
                {id}
            </div>
            <div className='col'>
                <input type="text" value={header} className="form-control"
                    onChange={e => setHeader(e.target.value)} />
            </div>
            <div className='col-sm-2 text-end' onClick={e => setType('CREDIT')}>
                {type === 'CREDIT' &&
                    <input type="number" value={amount} className="form-control"
                        onChange={e => setAmount(parseFloat(e.target.value))} />}
            </div>
            <div className='col-sm-2 text-end' onClick={e => setType('DEBIT')}>
                {type === 'DEBIT' && <input type="number" value={amount} className="form-control"
                    onChange={e => setAmount(parseFloat(e.target.value))} />}
            </div>
            {
                !isEditing ?
                    <div className='col-sm-2'>
                        <button className="btn btn-sm btn-primary"> ADD </button>
                    </div> :
                    <div className='col-sm-2'>
                        <button className="btn btn-sm btn-secondary me-1"> UPDATE </button>
                        <button type="button" className="btn btn-sm btn-danger"
                            onClick={e => cancel(id)}> CANCEL </button> 
                    </div>
            }

        </form>
    );
};

export default TxnForm;