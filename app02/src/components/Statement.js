import { Component } from 'react';

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

    totalOf = (txns, type) => (txns.filter(t => t.type === type).map(t => t.amount).reduce((a1, a2) => a1 + a2));

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            txns.map(t => (
                                <tr>
                                    <td className='text-end'>{t.id}</td>
                                    <td>{t.header}</td>
                                    <td className='text-end'> {(t.type === 'CREDIT') && t.amount} </td>
                                    <td className='text-end'> {(t.type === 'DEBIT') && t.amount} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2">Totals</th>
                            <th className='text-end'>{totalCredit}</th>
                            <th className='text-end'>{totalDebit}</th>
                        </tr>
                        <tr>
                            <th colSpan="3">Balance</th>
                            <th className='text-end'>{balance}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Statement;