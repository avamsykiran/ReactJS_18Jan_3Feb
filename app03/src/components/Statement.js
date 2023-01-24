import { Component } from 'react';
import TxnRow from './TxnRow';
import StatementSummary from './StatementSummary';
import TxnForm from './TxnForm';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txns: [
                { id: 1, header: 'Salary', type: 'CREDIT', amount: 45000 },
                { id: 2, header: 'Rent', type: 'DEBIT', amount: 5000 },
                { id: 3, header: 'Fuel', type: 'DEBIT', amount: 1000 },
                { id: 4, header: 'Mobile Recharge', type: 'DEBIT', amount: 800 }
            ]
        };
    }

    totalOf = (txns, type) => {
        let total = 0;
        if (txns && txns.length > 0) {
            let filteredTxns = txns.filter(t => t.type === type);
            if (filteredTxns && filteredTxns.length > 0) {
                total = filteredTxns.map(t => t.amount).reduce((a1, a2) => a1 + a2);
            }
        }
        return total;
    };

    add = txn => {
        let maxId = this.state.txns.length===0 ? 0 : 
            this.state.txns.map(t => t.id).reduce((id1,id2) => Math.max(id1,id2));
        txn.id = maxId+1;
        this.setState({txns: [...this.state.txns,txn] });
    }

    deleteById = id => {
        this.setState({ txns: this.state.txns.filter(t => t.id != id) });
    }

    render() {

        let { txns } = this.state;

        let totalCredit = this.totalOf(txns, "CREDIT");
        let totalDebit = this.totalOf(txns, "DEBIT");
        let balance = totalCredit - totalDebit;

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
                <TxnForm save={this.add} />
                {
                    txns && txns.length > 0 ?
                        txns.map(txn => (
                            <TxnRow key={txn.id} txn={txn} deleteById={this.deleteById} />
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
}

export default Statement;