import { Component } from 'react';

class TxnForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.txn ? { ...props.txn } : { id: 0, header: '', type: 'CREDIT', amount: 0 };
    }

    formSubmitted = event => {
        event.preventDefault();
        let txn = { ...this.state };
        this.props.save(txn);
        this.setState({ id: 0, header: '', type: 'CREDIT', amount: 0 });
    }

    render() {

        let { id, header, type, amount, isEditing } = this.state;

        return (
            <form className='row p-1 border-bottom border-primary' onSubmit={this.formSubmitted}>
                <div className='col-sm-2 text-end'>
                    {id}
                </div>
                <div className='col'>
                    <input type="text" value={header} className="form-control"
                        onChange={e => this.setState({ header: e.target.value })} />
                </div>
                <div className='col-sm-2 text-end' onClick={e => this.setState({ type: 'CREDIT' })}>
                    {type === 'CREDIT' &&
                        <input type="number" value={amount} className="form-control"
                            onChange={e => this.setState({ amount: parseFloat(e.target.value) })} />}
                </div>
                <div className='col-sm-2 text-end' onClick={e => this.setState({ type: 'DEBIT' })}>
                    {type === 'DEBIT' && <input type="number" value={amount} className="form-control"
                        onChange={e => this.setState({ amount: parseFloat(e.target.value) })} />}
                </div>
                {
                    !isEditing ?
                        <div className='col-sm-2'>
                            <button className="btn btn-sm btn-primary"> ADD </button>
                        </div> :
                        <div className='col-sm-2'>
                            <button className="btn btn-sm btn-secondary me-1"> UPDATE </button>
                            <button type="button" className="btn btn-sm btn-danger"
                                onClick={e => this.props.cancel(id)}> CANCEL </button>
                        </div>
                }

            </form>
        );
    }
}

export default TxnForm;