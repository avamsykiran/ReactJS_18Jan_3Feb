
const StatementSummary = ({ tc, td, bal }) => (
    <tfoot>
        <tr>
            <th colSpan="2">Totals</th>
            <th className='text-end'>{tc}</th>
            <th className='text-end'>{td}</th>
        </tr>
        <tr>
            <th colSpan="3">Balance</th>
            <th className='text-end'>{bal}</th>
        </tr>
    </tfoot>
);

export default StatementSummary;