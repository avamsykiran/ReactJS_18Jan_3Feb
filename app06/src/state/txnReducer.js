//action types
const WAIT = 'wait';
const ERR = 'error';
const REFRESH = 'refresh';
const MARK_TXN_EDITABLE = 'mark txn editable';
const UNMARK_TXN_EDITABLE = 'unmark txn editable';

//action creators
export const createWaitAction = () => ({ type: WAIT });
export const createErrAction = errMsg => ({ type: ERR, errMsg });
export const createRefreshAction = txns => ({ type: REFRESH, txns });
export const createMarkTxnEditableAction = id => ({ type: MARK_TXN_EDITABLE, id });
export const createUnMarkTxnEditableAction = id => ({ type: UNMARK_TXN_EDITABLE, id });

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

const txnReducer = (oldState = {txns:undefined,shallWait:false,errMsg:undefined}, action) => {

    let { txns, shallWait, errMsg } = oldState;

    switch (action.type) {
        case WAIT:
            shallWait=true;
            errMsg=undefined;
            break;
        case REFRESH:
            shallWait=false;
            txns = action.txns;
            break;
        case ERR:
            shallWait=false;
            errMsg = action.errMsg;
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

    return { txns, totalCredit, totalDebit, balance, shallWait,errMsg }; //modifiedState
};

export default txnReducer;