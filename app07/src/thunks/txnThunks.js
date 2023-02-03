import axios from 'axios';
import { createRefreshAction, createErrAction, createWaitAction } from '../state/txnReducer';

const apiUrl = "http://localhost:7777/txns";

export const createLoadTxnsActionThunk = aid => dispatch => {
    dispatch(createWaitAction());
    axios.get(apiUrl+"?accountId="+aid)
        .then(resp => dispatch(createRefreshAction(resp.data)))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Loading data failed! Please retry later!"));
         });
};

export const createAddTxnActionThunk = txn => dispatch => {
    dispatch(createWaitAction());
    axios.post(apiUrl, txn)
        .then(resp => createLoadTxnsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Saving data failed! Please retry later!"));
        });
};

export const createUpdateTxnActionThunk = txn => dispatch => {
    dispatch(createWaitAction());
    axios.put(apiUrl + "/" + txn.id, txn)
        .then(resp => createLoadTxnsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Saving data failed! Please retry later!"));
        });
};

export const createDelTxnActionThunk = id => dispatch => {
    dispatch(createWaitAction());
    axios.delete(apiUrl + "/" + id)
        .then(resp => createLoadTxnsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Deleting data failed! Please retry later!"));
        });
};