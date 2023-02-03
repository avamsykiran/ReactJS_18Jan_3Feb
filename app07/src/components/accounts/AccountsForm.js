
import { createGetByIdAction } from '../../state/accountsReducer';
import { createAddAccountActionThunk, createUpdateAccountActionThunk } from '../../thunks/accountsThunks';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

const AccountsForm = () => {

    let [id, setId] = useState(0);
    let [fullName, setFullName] = useState('');
    let [mailId, setMailId] = useState('');
    let [isNew, setIsNew] = useState(true);
    let [isSaved, setIsSaved] = useState(false);

    let account = useSelector(globalState => globalState.accountsReducer.currentAccount);
    let { aid } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (aid) {
            dispatch(createGetByIdAction(aid));
            setIsNew(false);
        }
    }, [aid]);

    useEffect(() => {
        if (account) {
            setId(account.id);
            setFullName(account.fullName);
            setMailId(account.mailId);
        }
    }, [account]);

    const formSubmitted = event => {
        event.preventDefault();

        let a = { id, fullName, mailId };
        if (isNew) {
            dispatch(createAddAccountActionThunk(a));
        } else {
            dispatch(createUpdateAccountActionThunk(a));
        }
        setIsSaved(true);
    };



    return isSaved ? <Navigate to="/" /> : (
        <div className="col-sm-5 mx-auto p-4">
            <h4>Account Form</h4>
            <form onSubmit={formSubmitted}>
                <div>
                    <label>Account Id</label>
                    <input type="number" readonly value={id} className="form-control" />
                </div>
                <div>
                    <label>Full Name</label>
                    <input type="text" value={fullName} className="form-control" 
                    onChange={e => setFullName(e.target.value)} />
                </div>
                <div>
                    <label>Mail Id</label>
                    <input type="email" value={mailId} className="form-control" 
                    onChange={e => setMailId(e.target.value)} />
                </div>
                <div className='d-grid p-2'>
                    <button className='btn btn-primary'>SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default AccountsForm;