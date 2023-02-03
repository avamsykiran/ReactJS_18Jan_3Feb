//action types
const WAIT = 'wait';
const ERR = 'error';
const REFRESH = 'refresh';
const GETBYID = 'get by id';

//action creators
export const createWaitAction = () => ({ type: WAIT });
export const createErrAction = errMsg => ({ type: ERR, errMsg });
export const createRefreshAction = accounts => ({ type: REFRESH, accounts });
export const createGetByIdAction = id =>({type:GETBYID,id});

const accountsReducer = (oldState = {accounts:undefined,shallWait:false,errMsg:undefined,currentAccount:undefined}, action) => {

    let { accounts, shallWait, errMsg,currentAccount } = oldState;

    switch (action.type) {
        case GETBYID:
            currentAccount = accounts.find( a => a.id==action.id);
            break;
        case WAIT:
            currentAccount = {id:0,fullName:'',mailId:''};
            shallWait=true;
            errMsg=undefined;
            break;
        case REFRESH:
            currentAccount = {id:0,fullName:'',mailId:''};
            shallWait=false;
            accounts = action.accounts;
            break;
        case ERR:
            currentAccount = {id:0,fullName:'',mailId:''};
            shallWait=false;
            errMsg = action.errMsg;
            break;
    }

    return { accounts, shallWait,errMsg,currentAccount }; //modifiedState
};

export default accountsReducer;