import axios from 'axios';
import { createRefreshAction, createErrAction, createWaitAction } from '../state/accountsReducer';

const apiUrl = "http://localhost:7777/accounts";

export const createLoadAccountsActionThunk = () => dispatch => {
    dispatch(createWaitAction());
    axios.get(apiUrl)
        .then(resp => dispatch(createRefreshAction(resp.data)))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Loading data failed! Please retry later!"));
         });
};

export const createAddAccountActionThunk = account => dispatch => {
    dispatch(createWaitAction());
    axios.post(apiUrl, account)
        .then(resp => createLoadAccountsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Saving data failed! Please retry later!"));
        });
};

export const createUpdateAccountActionThunk = account => dispatch => {
    dispatch(createWaitAction());
    axios.put(apiUrl + "/" + account.id, account)
        .then(resp => createLoadAccountsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Saving data failed! Please retry later!"));
        });
};

export const createDelAccountActionThunk = id => dispatch => {
    dispatch(createWaitAction());
    axios.delete(apiUrl + "/" + id)
        .then(resp => createLoadAccountsActionThunk()(dispatch))
        .catch(err => { 
            console.log(err); 
            dispatch(createErrAction("Deleting data failed! Please retry later!"));
        });
};