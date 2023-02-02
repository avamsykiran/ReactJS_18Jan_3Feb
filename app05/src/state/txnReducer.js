//action types
const ADD_TXN = 'add txn';
const UPD_TXN = 'update txn';
const DEL_TXN = 'delete txn';
const MARK_TXN_EDITABLE = 'mark txn editable';
const UNMARK_TXN_EDITABLE = 'unmark txn editable';

//action creators
export const createAddTxnAction = txn => ({ type: ADD_TXN, txn });
export const createUpdateTxnAction = txn => ({ type: UPD_TXN, txn });
export const createDeleteTxnAction = id => ({ type: DEL_TXN, id });
export const createMarkTxnEditableAction = id => ({ type: MARK_TXN_EDITABLE, id });
export const createUnMarkTxnEditableAction = id => ({ type: UNMARK_TXN_EDITABLE, id });

const initState = () => ({
    txns: [
        { id: 1, header: 'Salary', type: 'CREDIT', amount: 45000 },
        { id: 2, header: 'Rent', type: 'DEBIT', amount: 5000 },
        { id: 3, header: 'Fuel', type: 'DEBIT', amount: 1000 },
        { id: 4, header: 'Mobile Recharge', type: 'DEBIT', amount: 800 }
    ]
});

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

const txnReducer = (oldState = initState(), action) => {

    let txns = oldState.txns;

    switch (action.type) {
        case ADD_TXN: txns =
            [...txns, action.txn];
            break;
        case UPD_TXN:
            txns = txns.map(t => t.id == action.txn.id ? { ...action.txn, isEditing: undefined } : t);
            break;
        case DEL_TXN:
            txns = txns.filter(t => t.id != action.id);
            break;
        case MARK_TXN_EDITABLE:
            txns = txns.map(t => t.id == action.id ? { ...t, isEditing: true } : t);
            break;
        case UNMARK_TXN_EDITABLE:
            txns = txns.map(t => t.id == action.id ? { ...t, isEditing: undefined } : t);
            break;
    }

    let totalDebit = totalOf(txns, 'DEBIT');
    let totalCredit = totalOf(txns, 'CREDIT');
    let balance = totalCredit - totalDebit;

    return { txns, totalCredit, totalDebit, balance }; //modifiedState
};

export default txnReducer;