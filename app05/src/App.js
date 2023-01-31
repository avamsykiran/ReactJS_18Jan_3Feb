import { Fragment } from 'react';
import Header from './components/Header';
import Statement from './components/Statement';

const App = () => (
  <Fragment>
    <Header title="BudgetTracker" />
    <div className='container-fluid p-4'>
      <Statement />
    </div>
  </Fragment>
);

export default App;