import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createLoadAccountsActionThunk } from '../../thunks/accountsThunks';
import { useSelector, useDispatch } from 'react-redux';

const Accounts = () => {

    let accounts = useSelector(globalState => globalState.accountsReducer.accounts);
    let errMsg = useSelector(globalState => globalState.accountsReducer.errMsg);
    let shallWait = useSelector(globalState => globalState.accountsReducer.shallWait);

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadAccountsActionThunk()), []);

    return (
        <div className='col-sm-10 p-2 mx-auto'>
            <h4>Accounts </h4>

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

            {accounts && accounts.length > 0 &&
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Account#</th>
                            <th>Full Name</th>
                            <th>Mail Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accounts.map(a => (
                                <tr>
                                    <td>{a.id}</td>
                                    <td>{a.fullName}</td>
                                    <td>{a.mailId}</td>
                                    <td>
                                        <Link to={"/txns/" + a.id} className="btn btn-sm btn-primary me-2">STATEMENT</Link>
                                        <Link to={"/editAccount/" + a.id} className="btn btn-sm btn-secondary me-2">EDIT</Link>
                                        <button className="btn btn-sm btn-danger" type="button">DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Accounts;