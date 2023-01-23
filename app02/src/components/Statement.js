import { Component } from 'react';
import TxnRow from './TxnRow';
import StatementSummary from './StatementSummary';

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

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>TxnId</th>
                            <th>Header</th>
                            <th>Credit</th>
                            <th>Debit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            txns && txns.length > 0 ?
                                txns.map(txn => (
                                    <TxnRow key={txn.id} txn={txn} deleteById={this.deleteById} />
                                )) :
                                <tr>
                                    <td colSpan="4">
                                        <strong>No Transactions Recorded. Start by adding one.</strong>
                                    </td>
                                </tr>
                        }
                    </tbody>
                    <StatementSummary tc={totalCredit} td={totalDebit} bal={balance} />
                </table>
            </div>
        );
    }
}

export default Statement;