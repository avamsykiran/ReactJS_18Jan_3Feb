import { Fragment } from "react";

const StatementSummary = ({ tc, td, bal }) => (
    <Fragment>
        <div className='row p-2 border-bottom border-danger fw-bold'>
            <div className='col'>Totals</div>
            <div className='col-sm-2 text-end'>{tc}</div>
            <div className='col-sm-2 text-end'>{td}</div>
            <div className='col-sm-2'> </div>
        </div>
        <div className='row p-2 border-bottom border-danger fw-bold'>
            <div className='col'>Totals</div>
            <div className='col-sm-2 text-end'>{bal}</div>
            <div className='col-sm-2'> </div>
        </div>
    </Fragment>
);

export default StatementSummary;